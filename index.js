const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

let likesEl1 = document.getElementById("likes-1");
let likesEl2= document.getElementById("likes-2")
let likesEl3= document.getElementById("likes-3")
let countlikesProfile1El=document.getElementById("count-likes-profile1")
let countlikesProfile2El=document.getElementById("count-likes-profile2")
let countlikesProfile3El=document.getElementById("count-likes-profile3")

likesEl1.addEventListener("dblclick",function ()
{
    let count = Number(countlikesProfile1El.textContent);
    count++;
    countlikesProfile1El.textContent= count;
})
likesEl2.addEventListener("dblclick",function ()
{
    let count = Number(countlikesProfile2El.textContent);
    count++;
    countlikesProfile2El.textContent= count;
})
likesEl3.addEventListener("dblclick",function ()
{
    let count = Number(countlikesProfile3El.textContent);
    count++;
    countlikesProfile3El.textContent= count;
})




