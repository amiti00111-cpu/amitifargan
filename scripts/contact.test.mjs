import test from 'node:test';
import assert from 'node:assert/strict';
import handler from '../api/contact.js';
const valid={name:'Test User',phone:'0500000000',goal:'',contactConsent:true,policyVersion:'2026-10-20'};
async function run(body, method='POST', origin='https://amitifargan.vercel.app') {
  let status, output;
  await handler({method,headers:{host:'amitifargan.vercel.app',origin,'content-type':'application/json'},body},{setHeader(){},status(s){status=s;return this;},json(o){output=o;return this;}});
  return {status,output};
}
test('contact requires consent and rejects arbitrary data before forwarding',async()=>{
  const original=globalThis.fetch;let calls=0, forwarded;
  globalThis.fetch=async(url,options)=>{calls++;forwarded=JSON.parse(options.body);return {ok:true,json:async()=>({success:'true'})};};
  try {
    for(const body of [{...valid,contactConsent:false},{...valid,policyVersion:'old'},{...valid,goal:'medical info'},{...valid,phone:'invalid'},{...valid,_honey:'spam'},null]) assert.equal((await run(body)).status,400);
    assert.equal((await run(valid,'GET')).status,405);
    assert.equal((await run(valid,'POST','https://evil.example')).status,403);
    assert.equal(calls,0);
    assert.equal((await run({...valid,email:'discard@example.com',medical:'discard'})).status,200);
    assert.equal(calls,1);assert.equal(forwarded.medical,undefined);assert.equal(forwarded.email,undefined);assert.equal(forwarded.contactConsent,true);
    globalThis.fetch=async()=>({ok:true,json:async()=>({success:false})});assert.equal((await run(valid)).status,502);
    globalThis.fetch=async()=>{throw new Error('private error')};assert.deepEqual(await run(valid),{status:502,output:{success:false}});
  } finally {globalThis.fetch=original;}
});
