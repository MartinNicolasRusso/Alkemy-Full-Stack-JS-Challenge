import React from "react";
import { Link } from "react-router-dom";



export default function LandingPage(){
    return (
        <div class="container bg-primary bg-gradient bg-opacity-50 h-100">
        <div>
            <h1 className="h1Landing display-4">Finance Project by Martin Nicolas Russo</h1>
        </div>
        <h3>Hello welcome, this is my Full-Stack project for Alkemy.org. It is a personal budget management app that allows you to control your income and expenses.</h3>
        <div class='container-sm position-absolute top-50 start-50 translate-middle'>
        <button type="button" class="btn btn-primary">Login</button>
            <h4> Don't have an account? <Link>Sing up</Link></h4>
        </div>
        </div>
    )
}