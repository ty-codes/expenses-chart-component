const days = [
    {
      "day": "mon",
      "amount": 17.45
    },
    {
      "day": "tue",
      "amount": 34.91
    },
    {
      "day": "wed",
      "amount": 52.36
    },
    {
      "day": "thu",
      "amount": 31.07
    },
    {
      "day": "fri",
      "amount": 23.39
    },
    {
      "day": "sat",
      "amount": 43.28
    },
    {
      "day": "sun",
      "amount": 25.48
    }
  ]
let list = [];
days.forEach(day => {
    list.push(day.amount)
});

// returns the max number in amount
const max = Math.max(...list)



// returns the total of last 7 days expenses in two decimal places
const weekExpenses = list.reduce((a,b) => a + b).toFixed(2)

// statically rendered data. Would need more extensive db to render dynamically
const total = 525.36.toFixed(2)
document.getElementById("total").innerHTML = `$${total}`

// returns percentage increase or decrease
const lastMonthTotal = 500
if(total > lastMonthTotal.toFixed(2)) {
  document.getElementById("perc_change").innerHTML = `+${(((total-lastMonthTotal)/lastMonthTotal) * 100).toFixed(2)}%`
} else if(total === lastMonthTotal.toFixed(2)) {
  document.getElementById("perc_change").innerHTML = '+0%'
} else if (total < lastMonthTotal.toFixed(2)) {
  document.getElementById("perc_change").innerHTML = `${(((total-lastMonthTotal)/lastMonthTotal) * 100).toFixed(2)}%`

}

for(let i = 0; i < days.length; i++) {
    
    let day = document.getElementsByClassName(days[i].day)
    let height = Math.round((days[i].amount/max) * 100)
    day[0].style.height= `${height}%`
    if(day[0].style.height === "100%") {
        day[0].style.backgroundColor = 'hsl(186, 34%, 60%)'
    }
    day[0].title = `$${days[i].amount}`
}

