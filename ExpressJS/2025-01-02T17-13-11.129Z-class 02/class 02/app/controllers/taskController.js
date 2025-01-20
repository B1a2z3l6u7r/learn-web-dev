// url params
import {json} from "express";

export const demo1 =  async (req, res) => {
    let name=req.params.name;
    let age=req.params.age;
    return res.json({name:name,age:age});
}

// query string
export const demo2 =  async (req, res) => {
        let name=req.query.name;
        let age=req.query.age;
        return res.json({name:name,age:age});
}


// How to works with request JSON Body
export const demo3 =  async (req, res) => {
        let JSONBody=req.body
       return res.json(JSONBody);
}


// How to works with request Form Data File
export const demo4 =  async (req, res) => {
    let FormDataBody=req.body
    return res.json(FormDataBody);
}


// Request Header Properties
export const demo5 =  async (req, res) => {
        let reqHeaders=req.headers;
        return res.json(reqHeaders);
}

export const demo6 =  async (req, res) => {

    return res.json({name:"hello"})
}


// How to works with middleare
