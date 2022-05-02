import React from 'react'
import './project.css'

const Project = () => {
return (
<section id='project'>
<h5>My Recent Work</h5>
<h2>Projects</h2>
<div className='container project_container'>
<article className='project_item'>
<div class="card">
<div class="face face1">

<div class="concode">
    <i class="fab fa-windows"></i>            
    <h3>Java Game</h3>
</div>

</div>

<div class="face face2">
<div class="concode">
<p>• Developed a Java game using CodeNameOne framework.</p>
<a href='https://github.com' className='btn' target='_blank'>Source Code</a>
</div>
</div>
</div>
</article>
<article className='project_item'>
<div class="card">
<div class="face face1">
<div class="concode">
<i class="fab fa-android"></i><h3> Vendor Portal: in progress</h3>
</div>
</div>
<div class="face face2">
<div class="concode">
<p>• As part of senior design class and team of 7 other developers, currently working on a vendor portal for a
client that allows their customers to register and submit documentation for payment to schools.</p>
<a href='https://github.com' className='btn' target='_blank'>Source Code</a>

</div>
</div>
</div>
</article>
<article className='project_item'>
<div class="card">
<div class="face face1">
<div class="concode">
<i class="fab fa-apple"></i>
<h3>React Web App</h3>
</div>
</div>
<div class="face face2">
<div class="concode">
<p>• Developed a personal website using React Js, Node Js, HTML and CSS. Hosted it via GitHub.<br></br>• Utilized: Git, UI</p>
<a href='https://github.com/seran72/Gemechu' className='btn' target='_blank'>Source Code</a>
</div>
</div>
</div>
</article>


<article className='project_item'> 
<div class="card">
<div class="face face1">
<div class="concode">
    <i class="fab fa-apple"></i>
    <h3>Vehicle Classification AI</h3>
</div>
</div>
<div class="face face2">
<div class="concode">
    <p>• Developed vehicle classification deep learning model using CNN and transfer learning with accuracy,
precision, and recall-score all above 0.70 on the validation set. </p>
    <a href='https://github.com' className='btn' target='_blank'>Source Code</a>
</div>
</div>
</div>
</article>
<article className='project_item'> 
<div class="card">
<div class="face face1">
<div class="concode">
    <i class="fab fa-apple"></i>
    <h3>Yelp Business Star Rating Prediction AI</h3>
</div>
</div>
<div class="face face2">
<div class="concode">
    <p>• Developed a machine learning model to parse the reviews of businesses and predict star ratings with 93% accuracy.</p>
    <a href='https://github.com' className='btn' target='_blank'>Source Code</a>
</div>
</div>
</div>
</article>
<article className='project_item'> 
<div class="card">
<div class="face face1">
<div class="concode">
    <i class="fab fa-apple"></i>
    <h3>AI-based Network Intrusion Detection System</h3>
</div>
</div>
<div class="face face2">
<div class="concode">
    <p>• Developed a machine learning model to detect and protect a computer network by filtering out bad
connections and keeping the good ones through predictive learning. (Accuracy Achieved: 98%)</p>
    <a href='https://github.com' className='btn' target='_blank'>Source Code</a>
</div>
</div>
</div>
</article>
</div>
</section>
)
}
export default Project