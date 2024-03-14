function calculateBMI(){
    try {
        var weight = parseFloat(document.getElementById('weight').value);
        var height = parseFloat(document.getElementById('height').value) / 100; // convert cm to meters
        var age = parseFloat(document.getElementById('age').value);
       
        if (isNaN(weight) || weight <= 0 || weight > 500) {
            alert("Please enter a valid weight.");
            return;
        }

       
        if (isNaN(height) || height <= 0 || height > 3) {
            alert("Please enter a valid height.");
            return;
        }
        

        var bmi = weight / (height * height);
        var category;

    if  (bmi<18.5) {
        category="Kekurangan Berat Badan";
    } else if (bmi >= 18.5 && bmi < 25) {
        category = "Normal (Ideal)";
    } else if (bmi >= 25 && bmi < 30) {
        category = "Kelebihan Berat Badan";
    } else {
        category = "Kegemukan (Obesitas)";  
    }

    if (category === "Kelebihan Berat Badan" || "Kegemukan (Obesitas)" || bmi>25 ) {
        document.getElementById("isObesse").innerText = "Anda dianjurkan untuk menurunkan berat badan hingga batas normal. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalor makanan yang dikonsumsi dan berolahraga";      
        document.getElementById('additionalMessage').style.display = category ? "block" : "none";
    } else {
        document.getElementById("result").innerText = "Your BMI is: " + bmi.toFixed(2);
    }

    document.getElementById("category").innerText =  category
    
    } catch (error) {
        console.log(error);
    }
  
}

function resetUI() {
    // Reset input fields
    document.getElementById("weight").value = "";
    document.getElementById("height").value = "";
    document.getElementById("age").value = "";
    
    // Reset result display
    document.getElementById("result").innerText = "";
}


