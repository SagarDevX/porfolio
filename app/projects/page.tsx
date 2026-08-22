import React from 'react'
import Container from '../components/container'
import Projects from '../components/Projects'
import BlogFooter from '../blog/Blog-footer'

const page = () => {
    return (
        <Container>
            <div className='pb-1 '>
                <div className="flex flex-col gap-0 pt-2 mb-8">
                    <h1 className="text-2xl text-primary font-bold text-shadow-xs tracking-tight leading-tight">Projects</h1>
                    <p className="text-secondary text-md leading-tight ">A collection of things I have built while learning, experimenting, and slowly finding my own way of designing and developing.</p>
                </div>
                <div>
                    <Projects/>
                </div>
                <BlogFooter/>
            </div>
            
        </Container>

    )
}

export default page