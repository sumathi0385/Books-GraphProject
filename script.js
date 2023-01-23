let url = "https://gutendex.com/books/"
let result=[];
let bookId = [];
let downloadCount = []

function getAPIData(url){

     result = fetch(url)
  .then((response) => response.json())
  .then((data) => { 
    return data;
  });

}

const getBookDetails = async () => {
    const a = await result; 
    console.log(a.results)
    for(let key in a.results){

      
      bookId.push(`${a.results[key].id}`)
      downloadCount.push(`${a.results[key].download_count}`)
    }

    let cht = document.getElementById('myLine');
  let lineChart = new Chart(cht, {
  type: 'line',
  data:{
    labels: bookId,
    datasets:[{
      label:'Downloaded book count for all the books',
      lineTension:0.5,
      backgroundColor: "#e74c3c",
      borderCapStyle:'round',
      borderColor:"#27ae60",
      hoverBackgroundColor:"#34495e",           
      data: downloadCount,
      fill: true
     
      
    }]
  },
  options: {
    scales: {
      y: {
        title: {
          display:true,
          text: "# of books downloaded"
        }        

      },
      x: {
        title: {
          display:true,
          text: "Book Id"
        }        

      }
    }
  }

})

}

getAPIData(url)
getBookDetails()


