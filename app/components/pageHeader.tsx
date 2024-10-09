import React from "react";

const PageHeader = () => {
    return (
        <div className="flex flex-col gap-1 py-16">
        <h1>Components.fun</h1>
        <h2>A space where I explore UI concepts</h2>
        <p className="label-secondary">Made by <a href="https://twitter.com/eddzio">@eddzio</a></p>
      </div>   
    )
}

export default PageHeader;