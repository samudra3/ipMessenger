const http= require('http');

//data for the receiver
const data= JSON.stringify({message:"how have you been"});

//creating the option for the request
const options={
    hostname:'192.168.1.9',
    port:3000,
    path:'/',
    method:'POST',
    headers:{
        'Content-Type':"application/json",
        'content-length':data.length
    }
};

// creating the request fo it
const req= http.request(options,(res)=>{
    res.on('data',d=>{

        process.stdout.write(d);
    })
})

req.on('error',error=>{
    console.error(error);
})

req.write(data);
req.end();