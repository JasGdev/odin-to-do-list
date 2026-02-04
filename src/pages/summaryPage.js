import { getCategoryList, getCurrency } from "../controllers/stateController.js";
import Chart from 'chart.js/auto';

export default function summaryPage(){
    const summaryModalContent = document.querySelector('.summaryModalContent')
    summaryModalContent.innerHTML ='<canvas id="summaryChart"></canvas>';


    // Add pie chart

    const categoryList = getCategoryList();
    const names = categoryList.map(category => category.getName())
    const totals = categoryList.map(category => category.getTotalSpending());
    const colors = categoryList.map(category => category.getColor());

    console.log(names, totals, colors)
    new Chart( "summaryChart", {
        type: "pie",
        data: {
            labels: names,
            datasets: [{
                backgroundColor: colors,
                data: totals
            }]
        },
        options: {
            plugins:{
                title: {
                    display: true,
                    text: "Spending summary"
                }
            }
            
        }
    });

    // Add spending details
    const spendingDetail = document.createElement('div');
    spendingDetail.classList.add('spendingDetail')

    categoryList.sort((a,b) => b.getTotalSpending() - a.getTotalSpending())
    categoryList.forEach((category) => {
        const line = document.createElement('div')
        line.classList.add('summaryLine')

        line.innerHTML = `
        <span class = 'name' > ${category.getName()} </span>
        <span class = 'equal'> =</span>
        <span class = 'total'>${getCurrency() + category.getTotalSpending()}</span>
        `
        spendingDetail.appendChild(line)
    })
    summaryModalContent.appendChild(spendingDetail)





}