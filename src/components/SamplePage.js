import React from "react";
import { localurl } from "../utils/localUrl";

function SamplePage() {
  fetch(`${localurl}/refreshToken`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));

  return <div>SamplePage</div>;
}

export default SamplePage;
