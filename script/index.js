var selectFood = document.getElementById("select-food");
var dataMakanan = document.getElementById("data-makanan");


const inputData = (e) => {
    getDetailDataFood(e.target.value);
}

const getDataFood = async () => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    // const option =

    //  
    const response = await axios.get("http://localhost:4000/food", config);
    if (response.data.statusCode === 200) {
        for (let dataMakanan of response.data.data) {
            selectFood.appendChild(
                Object.assign(
                    document.createElement("option"),
                    {
                        innerHTML: `${dataMakanan.name}`,
                        value: dataMakanan.id
                    }
                )
            )
        }
    };
}

const getDetailDataFood = async (id) => {
    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }
    dataMakanan.innerHTML = ''
    const response = await axios.get(`http://localhost:4000/food/${id}`, config);
    if (response.data.statusCode == 200) {
        for (let data of response.data.data) {
            dataMakanan.innerHTML += `
            <div class="col-md-4">
            <div class="card" style="width: 18rem;height:300px">
            <img src="${data.image}"  class="card-img-top image-makanan" alt="...">
        <div class="card-body">
          <h5 class="card-title">${data.name}</h5>
        </div>
        </div>
        </div>
        `;
        }
    }
}

getDataFood();
getDetailDataFood();
