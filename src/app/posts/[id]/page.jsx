import React from 'react';


const getDetailsPost = async (id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await res.json();
    // console.log(data)
    return data;
}

// export const metadata = {
//     title: {
//         default: "Next Hero",
//         template: "%s | Next Hero"
//     },
//     description: "choose your meal",
// };


export const generateMetadata = async ({ params }) => {


    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const postData = await res.json();

    return {
        title: {
            absolute: `${postData.title}`
        },
        description: postData.body,
        keywords: postData.body.split(' ')
    }
}

const PostDetailsPage = async ({ params }) => {

    const data = await getDetailsPost(params.id);

    return (
        <div>
            <h5>Title: {data?.title}</h5>
            <p>{data?.body}</p>
        </div>
    );
};

export default PostDetailsPage;