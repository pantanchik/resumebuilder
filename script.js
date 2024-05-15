document.addEventListener('DOMContentLoaded', function () {
	const addInterestButton = document.getElementById('addInterest')
	const removeInterestButton = document.getElementById('removeInterest')
	const addLanguageButton = document.getElementById('addLanguage')
	const removeLanguageButton = document.getElementById('removeLanguage')
	const addExperienceButton = document.getElementById('addExperience')
	const removeExperienceButton = document.getElementById('removeExperience')
	const addEducationButton = document.getElementById('addEducation')
	const removeEducationButton = document.getElementById('removeEducation')
	const addCourseButton = document.getElementById('addCourse')
	const removeCourseButton = document.getElementById('removeCourse')
	const resumeFormContainer = document.getElementById('resumeFormContainer')
	const resumePreviewContainer = document.getElementById('resumePreviewContainer')
	const createResumeButton = document.getElementById('createResume')
	const backToFormButton = document.getElementById('backToForm')
	const resumeForm = document.getElementById('resumeForm')
	const resumePreview = document.getElementById('resumePreview')
    const downloadPDF = document.getElementById('downloadPDF')

	addInterestButton.addEventListener('click', function () {
		const interestsGroup = document.getElementById('interestsGroup')
        const interestsDiv = document.createElement('div')
        interestsDiv.classList.add('interests')
        interestsDiv.innerHTML = `
            <input type="text" class="interestInput" test-id="interest"/>
            <br>
        `
        interestsGroup.insertBefore(interestsDiv, addInterestButton)
	})

	removeInterestButton.addEventListener('click', function () {
		const interestsGroup = document.getElementById('interestsGroup')
        const interestsDivs = interestsGroup.querySelectorAll('.interests')
		if (interestsDivs.length > 1) {
			interestsGroup.removeChild(interestsDivs[interestsDivs.length - 1])
		}        
	})

	addLanguageButton.addEventListener('click', function () {
		const languagesGroup = document.getElementById('languagesGroup')
		const languageDiv = document.createElement('div')
		languageDiv.classList.add('languages')
		languageDiv.innerHTML = `
            <input type="text" class="languageInput" test-id="language-name" placeholder="Язык">
            <input type="text" class="proficiencyInput" test-id="language-level" placeholder="Уровень владения">
	    `
		languagesGroup.insertBefore(languageDiv, addLanguageButton)
	})

	removeLanguageButton.addEventListener('click', function () {
		const languagesGroup = document.getElementById('languagesGroup')
		const languageDivs = languagesGroup.querySelectorAll('.languages')
		if (languageDivs.length > 1) {
			languagesGroup.removeChild(languageDivs[languageDivs.length - 1])
		}
	})

    addExperienceButton.addEventListener('click', function () {
        const experienceGroup = document.getElementById('experienceGroup')
        const experienceDiv = document.createElement('div')
        experienceDiv.classList.add('experienceInput')
        experienceDiv.innerHTML = `
            <div class="space-between">
                <input type="text" class="position" test-id="job-title" placeholder="Должность"/>
                <div>
                    <input type="date" class="startDate" test-id="job-date-start"/>
                    <input type="date" class="endDate" test-id="job-date-end"/>  
                </div>                                                                    
            </div>  
            <input type="text" class="company" test-id="job-place" placeholder="Место работы"/>                             
            <br>
            <textarea class="textareaExperienceResize details" test-id="job-description" rows="3" placeholder="Детальная информация"></textarea>
        `
        experienceGroup.insertBefore(experienceDiv, addExperienceButton)
    })

    removeExperienceButton.addEventListener('click', function () {
        const experienceGroup = document.getElementById('experienceGroup')
        const experienceDivs = experienceGroup.querySelectorAll('.experienceInput')
        if (experienceDivs.length != 1) {
            experienceGroup.removeChild(experienceDivs[experienceDivs.length - 1])
        }
    })

    addEducationButton.addEventListener('click', function () {
        const educationGroup = document.getElementById('educationGroup')
        const educationDiv = document.createElement('div')
        educationDiv.classList.add('educationInput')
        educationDiv.innerHTML = `
            <div class="space-between">
                <input type="text" class="degree" test-id="education-title" placeholder="Образование"/>
                <div>
                    <input type="date" class="startDate" test-id="education-date-start"/>
                    <input type="date" class="endDate" test-id="education-date-end"/>
                </div>
            </div>
            <input type="text" class="institution" test-id="education-place" placeholder="Место обучения"/>
            <br>
            <textarea class="textareaEducationResize" test-id="education-description" rows="3" placeholder="Детальная информация"></textarea>
        `
        educationGroup.insertBefore(educationDiv, addEducationButton)
    })
    
    removeEducationButton.addEventListener('click', function () {
        const educationGroup = document.getElementById('educationGroup')
        const educationDivs = educationGroup.querySelectorAll('.educationInput')
        if (educationDivs.length > 1) {
          educationGroup.removeChild(educationDivs[educationDivs.length - 1])
        }
    })

    addCourseButton.addEventListener('click', function () {
        const coursesGroup = document.getElementById('coursesGroup')
        const courseDiv = document.createElement('div')
        courseDiv.classList.add('coursesInput')
        courseDiv.innerHTML = `
            <div class="space-between">
                <input type="text" class="course" test-id="course-title" placeholder="Курс"/>
                <div>
                    <input type="date" class="startDate" test-id="course-date-start"/>
                    <input type="date" class="endDate" test-id="course-date-end"/>
                </div>                            
            </div>
            <input type="text" class="organization" test-id="course-place" placeholder="Авторы курса"/>
        `
        coursesGroup.insertBefore(courseDiv, addCourseButton)
    })

    removeCourseButton.addEventListener('click', function () {
        const coursesGroup = document.getElementById('coursesGroup')
        const courseDivs = coursesGroup.querySelectorAll('.coursesInput')
        if (courseDivs.length > 1) {
          coursesGroup.removeChild(courseDivs[courseDivs.length - 1])
        }
    })

	createResumeButton.addEventListener('click', function () {
		const fullName = document.getElementById('fullNameInput').value

		if (fullName.trim() !== '') {
			resumeFormContainer.style.display = 'none'
			resumePreviewContainer.style.display = 'flex'
			generateResume()
		} else {
			alert('Пожалуста введите ФИО')
		}
	})

	backToFormButton.addEventListener('click', function () {
		resumeFormContainer.style.display = 'flex'
		resumePreviewContainer.style.display = 'none'
	})

    downloadPDF.addEventListener('click', function () {
        html2canvas(resumePreview).then(canvas => {
            // Получение объекта jsPDF из глобального объекта window
            const { jsPDF } = window.jspdf;
            // Инициализация нового документа PDF с размером страницы A4
            const pdf = new jsPDF('p', 'mm', 'a4');
            // Вычисление масштаба для соответствия ширины A4
            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            const scale = pageWidth / canvasWidth;
            // Добавление изображения в документ PDF с учетом масштаба
            pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, canvasWidth * scale, canvasHeight * scale);
            // Сохранение документа PDF
            pdf.save('download.pdf');
        });
          
    })

    const fullNameInput = document.getElementById("fullNameInput")

    // Обновляем доступность кнопки при изменении содержимого поля ФИО
    fullNameInput.addEventListener("input", function () {
        // Если значение поля ФИО пустое, делаем кнопку неактивной
        if (fullNameInput.value.trim() === "") {
            createResumeButton.disabled = true
        } else {
            // Если в поле ФИО есть текст, делаем кнопку активной
            createResumeButton.disabled = false
        }
    })

	function generateResume() {
        const fullNameInput = document.getElementById('fullNameInput').value
        const dobInput = document.getElementById('dobInput').value
        const cityInput = document.getElementById('cityInput').value
        const phoneNumberInput = document.getElementById('phoneNumberInput').value
        const emailInput = document.getElementById('emailInput').value
        const interestGroup = document.getElementById('interestGroup')
        const interestInputs = document.querySelectorAll('.interestInput')
        const languageInput = document.querySelectorAll('.languageInput')
        const languages = document.getElementById('languages')

        const inputImage = document.getElementById('inputImage')

        let fullName = document.querySelectorAll('.fullName')

        fullName.forEach(elem => (elem.textContent = fullNameInput))

        function formatDate(date) {
            let options = { year: 'numeric', month: 'numeric', day: 'numeric' }
            return date.toLocaleDateString('ru-RU', options)
        }
        
        function getDate(date) {
            let selectedDate = new Date(date)
        
            let formattedDate = formatDate(selectedDate)
            return formattedDate
        } 

        const dob = document.getElementById("dob")
        if (dobInput) {
            dob.innerHTML = `
                <span><b>Дата рождения</b></span>
                <br/>
                <span class="font-size-12p5">${getDate(dobInput)}</span>
            `
            dob.removeAttribute("hidden")
        } else {    
            dob.setAttribute("hidden", true)
        }

        const city = document.getElementById("city")
        if (cityInput) {
            city.innerHTML = `
                <span><b>Город</b></span>
                <br/>
                <span class="font-size-12p5">${cityInput}</span>               
            `
            city.removeAttribute("hidden")
        } else {
            city.setAttribute("hidden", true)
        }  

        const phoneNumber = document.getElementById("phoneNumber")
        if (phoneNumberInput) {
            phoneNumber.innerHTML = `
                <span><b>Номер телефона</b></span>
                <br/>
                <span class="font-size-12p5">${phoneNumberInput}</span>
            `
            phoneNumber.removeAttribute("hidden")
        } else {
            phoneNumber.setAttribute("hidden", true)
        }
        
        const email = document.getElementById("email")
        if (emailInput) {
            email.innerHTML = `
                <span><b>Email</b></span>
                <br/>
                <span class="font-size-12p5">${emailInput}</span>
            `
            email.removeAttribute("hidden")
        } else {
            email.setAttribute("hidden", true)
        }

        const interestInput = document.getElementById("first-interestInput")

        if (interestInputs.length > 0 && interestInput.value != "") {
            interestGroup.innerHTML = `
                <h3>Интересы</h3>
                <hr/>
            `
            interestInputs.forEach((input) => {
                const interest = input.value;
                const interestDiv = document.createElement("div")
                interestDiv.textContent = interest;
                interestGroup.appendChild(interestDiv)
            });
        } else {
            interestGroup.style.display = "none";
        }

        const languageInputs = document.querySelectorAll(".languageInput");
        const proficiencyInput = document.querySelector(".proficiencyInput");
        const proficiencyInputs = document.querySelectorAll(".proficiencyInput");

        if (languageInputs.length > 0 && languageInput.value != "" && proficiencyInput.value != "") {
            languages.innerHTML = `
                <h3>Языки</h3>
                <hr/>
                `
            languageInputs.forEach((input, index) => {
                const language = input.value;
                const proficiency = proficiencyInputs[index].value;
                if (language.trim() !== "" && proficiency.trim() !== "") {
                const languageDiv = document.createElement("div");
                languageDiv.classList.add('space-between')
                languageDiv.innerHTML = `<span><b>${language}</b></span><span>${proficiency}</span>`;
                languages.appendChild(languageDiv);
                }
            });
            languages.style.display = "block"
        } else {
            languages.style.display = "none"
        }

        const descriptionInput = document.getElementById('descriptionInput').value
        const description = document.getElementById('description')

        description.innerHTML = ''
        
        description.textContent = descriptionInput

        function formatDate2(date) {
            let options = { year: 'numeric', month: 'long', day: 'numeric'}
            return date.toLocaleDateString('ru-RU', options)
        }
        
        function getDate2(date) {
            let selectedDate = new Date(date)
        
            let formattedDate = formatDate2(selectedDate)
            return formattedDate
        }

        const experienceData = []
		const experienceBlocks = document.querySelectorAll('.experienceInput')
		if (experienceBlocks) {
			experienceBlocks.forEach(block => {
				const position = block.querySelector('.position').value
				let startDate = getDate2(block.querySelector('.startDate').value)
                let endDate = getDate2(block.querySelector('.endDate').value)
				const company = block.querySelector('.company').value
				const details = block.querySelector('.details').value
                let spanDate = '' 

                if(startDate != 'Invalid Date' || endDate != 'Invalid Date') {
                    if(startDate == 'Invalid Date') {
                        startDate = '—'
                    }
    
                    if(endDate == 'Invalid Date') {
                        endDate = 'наст. время'
                    }

                    spanDate = `${startDate} - ${endDate}` 
                }                

				const experience = {
					position,
					spanDate,
					company,
					details,
				}
				experienceData.push(experience)
			})          

			// Создаем HTML-код для опыта работы
			let experienceHTML = ''
			experienceData.forEach(item => {
				experienceHTML += `
                <div>
                    <div class="space-between">
                        <b>${item.position}</b>
                        <span>${item.spanDate}</span>
                    </div>
                    <span><i>${item.company}</i></span>
                    <div><span>${item.details}</span></div>
                </div>
                `
			})

			// Вставляем HTML-код для опыта работы на страницу
			document.getElementById('experience').innerHTML = experienceHTML
		} 
        
        const educationData = []
		const educationBlocks = document.querySelectorAll('.educationInput')
        if (educationBlocks) {
            educationBlocks.forEach(block => {
                const degree = block.querySelector('.degree').value
                let startDate = getDate2(block.querySelector('.startDate').value)
                let endDate = getDate2(block.querySelector('.endDate').value)
                const institution = block.querySelector('.institution').value
                const details = block.querySelector('.details').value
                let spanDate = ''

                if(startDate != 'Invalid Date' || endDate != 'Invalid Date') {
                    if(startDate == 'Invalid Date') {
                        startDate = '—'
                    }
    
                    if(endDate == 'Invalid Date') {
                        endDate = 'наст. время'
                    }

                    spanDate = `${startDate} - ${endDate}` 
                }
    
                const education = {
                    degree,
                    spanDate,
                    institution,
                    details,
                }
                educationData.push(education)
            })

            
    
            // Создаем HTML-код для образования
            let educationHTML = ''
            educationData.forEach(item => {
                educationHTML += `
                <div>
                    <div class="space-between">
                        <b>${item.degree}</b>
                        <span>${item.spanDate}</span>
                    </div>
                    <span><i>${item.institution}</i></span>
                    <div><span>${item.details}</span></div>
                </div>
                `
            })
    
            // Вставляем HTML-код для образования на страницу
            document.getElementById('education').innerHTML = educationHTML
        }
		
        const courseData = []
		const courseBlocks = document.querySelectorAll('.coursesInput')
        if (courseBlocks) {
            courseBlocks.forEach(block => {
                const courseName = block.querySelector('.course').value
                let startDate = getDate2(block.querySelector('.startDate').value)
                let endDate = getDate2(block.querySelector('.endDate').value)
                const organization = block.querySelector('.organization').value
                let spanDate = ''

                if(startDate != 'Invalid Date' || endDate != 'Invalid Date') {
                    if(startDate == 'Invalid Date') {
                        startDate = '—'
                    }
    
                    if(endDate == 'Invalid Date') {
                        endDate = 'наст. время'
                    }

                    spanDate = `${startDate} - ${endDate}` 
                }
    
                const course = {
                    courseName,
                    spanDate,
                    organization,
                }
                courseData.push(course)
            })
    
            // Создаем HTML-код для курсов
            let courseHTML = ''
            courseData.forEach(item => {
                courseHTML += `
                <div>
                    <div class="space-between">
                        <span><b>${item.courseName}</b></span>
                        <span class="font-size-12p5">${item.spanDate}</span>
                    </div>
                    <span><i>${item.organization}</i></span>
                </div>
                `
            })
    
            // Вставляем HTML-код для курсов на страницу
            document.getElementById('course').innerHTML = courseHTML
        }
        
        function displayImage(inputElement) {
            const file = inputElement.files[0];
            const reader = new FileReader();
            
            reader.onload = function(e) {
                const base64Image = e.target.result;
                document.getElementById('userPhoto').src = base64Image;
            };
            
            reader.onerror = function(error) {
                console.error('Ошибка при чтении файла: ', error);
            };
            
            reader.readAsDataURL(file);
        }

        displayImage(inputImage)

        const obj1 = document.querySelector(".first-main-info")
        const obj2 = document.querySelector(".second-main-info")

        if (obj1.offsetHeight < obj2.offsetHeight) {
        obj1.style.height = obj2.offsetHeight + "px"
        }
        if (obj2.offsetHeight < obj1.offsetHeight) {
            obj2.style.height = obj1.offsetHeight + "px"
            }
	}   
})

var textareaDescription = document.querySelector('.textareaDescriptionResize')

textareaDescription.addEventListener('keyup', function (){
	if(this.scrollTop > 0){
		this.style.height = this.scrollHeight + "px"
    }
})

var textareaExperience = document.querySelector('.textareaExperienceResize')

textareaExperience.addEventListener('keyup', function () {
	if(this.scrollTop > 0){
		this.style.height = this.scrollHeight + "px"
    }
})

var textareaEducation = document.querySelector('.textareaEducationResize')

textareaEducation.addEventListener('keyup', function () {
	if(this.scrollTop > 0){
		this.style.height = this.scrollHeight + "px"
    }
})
