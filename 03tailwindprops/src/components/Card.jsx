import React from "react";

function Card({username = "PA",post = "Not assigned yet"}) {
    //console.log(props);
    return(
        <div>
            {/* <img src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            <h1 className="text-2xl bg-green-500 p-3 rounded">A card for
             photos</h1>
             <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, unde.</p> */}

<figure className="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/46216/sunflower-flowers-bright-yellow-46216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" width="384" height="512" />
  <div className="pt-6 text-center space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, fuga!
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        {username}
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        {post}
      </div>
    </figcaption>
  </div>
</figure>  
        </div>
    )
}

export default Card