// get the parent of the element

const verticalTimelineBody = document.getElementsByClassName("body")[0];

const appendData = (data, index, maxIndex) => {
  console.log(data);
  const createDiv = document.createElement("div");
  createDiv.classList.add("child");
  if (index % 2 === 0) {
    createDiv.innerHTML = `
  <div class="left show">
            ${data.content}
          </div>
          <div class="middle">
            <div class="parent">
              <div class="line" ${
                index === 0 ? `style="border-radius:8px 8px 0px 0px"` : ``
              }
              ${
                index === maxIndex - 1
                  ? 'style="border-radius:0px 0px 8px 8px"'
                  : ""
              }
              ></div>
              <div class="hor_line_left"></div>
              <div class="circle"></div>
            </div>
          </div>
          <div class="right visibitity_hidden"></div>
  `;
  } else {
    createDiv.innerHTML = `
  <div class="left visibitity_hidden"></div>
          <div class="middle">
            <div class="parent">
              <div class="line" ${
                index === maxIndex - 1
                  ? 'style="border-radius:0px 0px 8px 8px"'
                  : ""
              }></div>
              <div class="hor_line_right"></div>
              <div class="circle"></div>
            </div>
          </div>
          <div class="right show">
             ${data.content}
          </div>
        </div>
  `;
  }

  verticalTimelineBody.appendChild(createDiv);
};

const fetchData = async () => {
  let dataContent;
  const res = await fetch("data.json");
  const resData = await res.json();
  dataContent = resData.data;
  for (let index = 0; index < dataContent.length; index++) {
    const element = dataContent[index];
    appendData(element, index, dataContent.length);
  }
};

fetchData();
