/*CMPS3141-HCI - AS1-23S1
Collaborators: Miguel Vairez
Date:26/08/2023
 */
import { createApp } from "https://mavue.mavo.io/mavue.js";

let app = createApp({
	data: {
		assessments: {
			project: null,
			prgmSet: null,
			homework: null,
			Test: null,
			FExam: null
		},
		homeworks: [null],
		Tests: [null]
		
	},

	computed: {

		calculatedGrade () {
			let p = this.assessments;
			let return_val = 0.25 * p.project + 0.25 * p.fExam + 0.05 * p.pSet + 0.25 * this.homeworkAverage + 0.20 * this.TestAverage ;			
			return return_val;
		},


		
		homeworkAverage() {
			let done = 0;
			let sum = 0;
		
			for (let hw of this.homeworks) {
			if (hw !== null && !isNaN(hw) && hw >= 0) {
				sum += parseFloat(hw);
				done++;
			}
			}
		
			return done > 0 ? sum / done : 0;
		},
		TestAverage(){
			let testDone = 0;
			let testSum = 0;

			for(let Tts of this.Tests){
				if(Tts !== null && !isNaN(Tts) && Tts >=0 ) {
					testSum += parseFloat(Tts);
					testDone++;
				}
			}
			return testDone > 0 ? testSum / testDone : 0;
		}


	},

	methods: {


		addHomework() {
			var val_range = document.getElementById("HW.value").value;
			if(this.homeworks.length <= 5 && val_range <= 100 && val_range > 0){
				this.homeworks.push(val_range);
			}
			else{
				if( val_range < 0){
				alert("Negative value is invalid");}
				else if(val_range > 100){alert("Value has exceeded limit")}
				else if(this.homeworks.length >5){alert("Limit of values has been reached")}
			}
			if (this.homeworks != null){
				document.getElementById("homeworksGrade").innerText = this.homeworks.join(" | ");
			}
		},

		addTest() {
			var val_range = document.getElementById("test.value").value;
			if(this.Tests.length <= 2 && val_range <=100 && val_range > 0){
				this.Tests.push(val_range);
			}
			else{
				if(val_range < 0){alert("Negative value is invalid")}
				else if(val_range > 100){alert("Value has exceeded limit")}
				else if(this.Tests.length > 2){alert("Limit of values has been reached")}
			}
			if(this.Tests != null){
				document.getElementById("testsGrades").innerText = this.Tests.join(" | ");
				
			}
		},
		
		resetForm() {
			
			this.assessments.project = null;
			this.assessments.pSet = null;
			this.assessments.homework = null;
			this.assessments.Test = null;
			this.assessments.fExam = null;

			
			this.homeworks = [null];
			this.Tests = [null];

			
			document.getElementById("homeworksGrade").innerText = "";
			document.getElementById("testsGrades").innerText = "";
		}
		
	}
}, "#grade_calc");