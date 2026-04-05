function classifyKWH(){

    let userKWH = document.getElementById("inputKWH").value;

    if (userKWH >= 0 && userKWH <= 100) {
        window.alert("Lifeline Consumer : Discounted Electricity Rates");
    } else if (userKWH >= 101 && userKWH <= 200){
        window.alert("Low Consumption : Normal Residential Rate")
    } else if (userKWH >= 201 && userKWH <= 300){
        window.alert("Average Consumption : Typical Electricity Usage")
    } else if (userKWH >= 301 && userKWH <= 500){
        window.alert("High Consumption : Higher Electricty Usage")
    } else if (userKWH < 0){
        window.alert("Please enter a non-negative number.")
    } else {
        window.alert("Very High Consumption : Heavy Electricity Users")
    }
}