import Post from "./Post";

import Logo from "./assets/logo.png";
import json from "./assets/json";
import "./styles/styles.css";

const post = new Post(json.title, Logo);

console.log(post.toString());
