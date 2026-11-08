const hits=new Map<string,number[]>();
export function rateLimited(key:string,max=10,windowMs=60000):boolean{ const now=Date.now(); const arr=(hits.get(key)||[]).filter(t=>now-t<windowMs); if(arr.length>=max) return true; arr.push(now); hits.set(key,arr); return false; }
