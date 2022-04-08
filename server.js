console.log('hellokjgjhfhg');
const anyexpress=require('express')
const anyserver=anyexpress();
const middleware1=(request,response,next)=>{
console.log('middleware1');
next()
}
anyserver.use(middleware1);
const middleware2=(request,response,next)=>{
    console.log('middleware2');
    next()
    }
    

anyserver.get("/",(request,response)=>{
response.send('u give path name user to see details');
})
anyserver.get("/user",middleware2,(request,response)=>{
    response.send({name:"viddu",age:23,color:"black"});
    })
anyserver.listen("8900")