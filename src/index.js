import Post from "./Post";

import Logo from "@assets/logo";
import json from "@assets/json";
import xml from "@assets/data.xml";
import csv from "@assets/data.csv";
import "./styles/styles.css";

const post = new Post(json.title, Logo);

console.log("XML", xml);
console.log("CSV", csv);
console.log(post.toString());
