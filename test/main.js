document.addEventListener("DOMContentLoaded", function () {
  const addInterestButton = document.getElementById("addInterest");
  const removeInterestButton = document.getElementById("removeInterest");
  const addLanguageButton = document.getElementById("addLanguage");
  const removeLanguageButton = document.getElementById("removeLanguage");
  const addExperienceButton = document.getElementById("addExperience");
  const removeExperienceButton = document.getElementById("removeExperience");
  const addEducationButton = document.getElementById("addEducation");
  const removeEducationButton = document.getElementById("removeEducation");
  const addCourseButton = document.getElementById("addCourse");
  const removeCourseButton = document.getElementById("removeCourse");
  const resumeFormContainer = document.getElementById("resumeFormContainer");
  const resumePreviewContainer = document.getElementById(
    "resumePreviewContainer",
  );
  const createResumeButton = document.getElementById("createResume");
  const backToFormButton = document.getElementById("backToForm");
  const resumeForm = document.getElementById("resumeForm");
  const resumePreview = document.getElementById("resumePreview");

  addInterestButton.addEventListener("click", function () {
    const interestsGroup = document.getElementById("interestsGroup");
    const interestsDiv = document.createElement("div");
    interestsDiv.classList.add("interests");
    interestsDiv.innerHTML = `
        <input type="text" class="interest" test-id="interest"/>
        <br>
        `;
    interestsGroup.insertBefore(interestsDiv, addInterestButton);
  });

  removeInterestButton.addEventListener("click", function () {
    const interestsGroup = document.getElementById("interestsGroup");
    const interestsDivs = interestsGroup.querySelectorAll(".interests");
    if (interestsDivs.length > 1) {
      interestsGroup.removeChild(interestsDivs[interestsDivs.length - 1]);
    }
  });

  addLanguageButton.addEventListener("click", function () {
    const languagesGroup = document.getElementById("languagesGroup");
    const languageDiv = document.createElement("div");
    languageDiv.classList.add("languages");
    languageDiv.innerHTML = `
		<input type="text" class="language" placeholder="Язык" test-id="language-name">
		<input type="text" class="proficiency" placeholder="Уровень владения" test-id="language-level">
	    `;
    languagesGroup.insertBefore(languageDiv, addLanguageButton);
  });

  removeLanguageButton.addEventListener("click", function () {
    const languagesGroup = document.getElementById("languagesGroup");
    const languageDivs = languagesGroup.querySelectorAll(".languages");
    if (languageDivs.length > 1) {
      languagesGroup.removeChild(languageDivs[languageDivs.length - 1]);
    }
  });

  addExperienceButton.addEventListener("click", function () {
    const experienceGroup = document.getElementById("experienceGroup");
    const experienceDiv = document.createElement("div");
    experienceDiv.classList.add("experience");
    experienceDiv.innerHTML = `
        <div class="space-between">
            <input type="text" class="position" placeholder="Должность" test-id="job-title"/>
            <div>
                <input type="date" class="startDate" test-id="job-date-start"/>
                <input type="date" class="endDate" test-id="job-date-end"/>  
            </div>                                                                    
        </div>  
        <input type="text" class="company" placeholder="Место работы" test-id="job-place"/>                             
        <br>
        <textarea class="textareaExperienceResize details" rows="3" placeholder="Детальная информация" test-id="job-description"></textarea>
        `;
    experienceGroup.insertBefore(experienceDiv, addExperienceButton);
  });

  removeExperienceButton.addEventListener("click", function () {
    const experienceGroup = document.getElementById("experienceGroup");
    const experienceDivs = experienceGroup.querySelectorAll(".experience");
    if (experienceDivs.length > 1) {
      experienceGroup.removeChild(experienceDivs[experienceDivs.length - 1]);
    }
  });

  addEducationButton.addEventListener("click", function () {
    const educationGroup = document.getElementById("educationGroup");
    const educationDiv = document.createElement("div");
    educationDiv.classList.add("education");
    educationDiv.innerHTML = `
        <div class="space-between">
            <input type="text" class="degree" placeholder="Образование" test-id="education-title"/>
            <div>
                <input type="date" class="startDate" test-id="education-date-start"/>
                <input type="date" class="endDate" test-id="education-date-end"/>
            </div>
        </div>
        <input type="text" class="institution" placeholder="Место обучения" test-id="education-place"/>
        <br>
        <textarea class="textareaEducationResize details" rows="3" placeholder="Детальная информация" test-id="education-description"></textarea>
        `;
    educationGroup.insertBefore(educationDiv, addEducationButton);
  });

  removeEducationButton.addEventListener("click", function () {
    const educationGroup = document.getElementById("educationGroup");
    const educationDivs = educationGroup.querySelectorAll(".education");
    if (educationDivs.length > 1) {
      educationGroup.removeChild(educationDivs[educationDivs.length - 1]);
    }
  });

  addCourseButton.addEventListener("click", function () {
    const coursesGroup = document.getElementById("coursesGroup");
    const courseDiv = document.createElement("div");
    courseDiv.classList.add("courses");
    courseDiv.innerHTML = `
        <div class="space-between">
            <input type="text" class="course" placeholder="Курс" test-id="course-title"/>
            <div>
                <input type="date" class="startDate" test-id="course-date-start"/>
                <input type="date" class="endDate" test-id="course-date-end"/>
            </div>                            
        </div>
        <input type="text" class="organization" placeholder="Организация" test-id="course-place"/>
        `;
    coursesGroup.insertBefore(courseDiv, addCourseButton);
  });

  removeCourseButton.addEventListener("click", function () {
    const coursesGroup = document.getElementById("coursesGroup");
    const courseDivs = coursesGroup.querySelectorAll(".courses");
    if (courseDivs.length > 1) {
      coursesGroup.removeChild(courseDivs[courseDivs.length - 1]);
    }
  });

  createResumeButton.addEventListener("click", function () {
    const fullName = document.getElementById("fullName").value;
    if (fullName.trim() !== "") {
      resumeFormContainer.style.display = "none";
      resumePreviewContainer.style.display = "block";
      generateResume();
    } 
  });

  backToFormButton.addEventListener("click", function () {
    resumeFormContainer.style.display = "flex";
    resumePreviewContainer.style.display = "none";
  });

  const fullNameInput = document.getElementById("fullName");
  fullNameInput.addEventListener("input", function () {
    if (fullNameInput.value.trim() === "") {
      createResumeButton.disabled = true;
    } else {
      createResumeButton.disabled = false;
    }
  });

  function generateResume() {
    const fullName = document.getElementById("fullName").value;
    const dob = document.getElementById("dob").value;
    const city = document.getElementById("city").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;
    const description = document.getElementById("description").value;

    const parts = dob.split("-");
    const formattedDob = parts[2] + "." + parts[1] + "." + parts[0];

    let fNs = document.querySelectorAll(".fN");

    fNs.forEach((elem) => (elem.textContent = fullName));

    document.getElementById("rdob").textContent = formattedDob;
    const rdob = document.getElementById("rdob");
    if (dob) {
      rdob.innerHTML = `
        <span><b>Дата рождения</b></span>
        <br />
        <span>${formattedDob}</span>
      `;
      rdob.removeAttribute("hidden");
    } else {
      rdob.setAttribute("hidden", true);
    }

    const rcityElement = document.getElementById("rcity");
    if (city) {
      rcityElement.innerHTML = `
        <span><b>Город</b></span>
        <br />
        <span>${city}</span>
        
      `;
      rcityElement.removeAttribute("hidden");
    } else {
      rcityElement.setAttribute("hidden", true);
    }

    document.getElementById("rphoneNumber").textContent = phoneNumber;

    const rphoneNumber = document.getElementById("rphoneNumber");
    if (phoneNumber) {
      rphoneNumber.innerHTML = `
      <span><b>Номер телефона</b></span>
      <br />
      <span>${phoneNumber}</span>
        
      `;
      rphoneNumber.removeAttribute("hidden");
    } else {
      rphoneNumber.setAttribute("hidden", true);
    }

    document.getElementById("remail").textContent = email;

    const remail = document.getElementById("remail");
    if (email) {
      remail.innerHTML = `
      <span><b>Email</b></span>
      <br />
      <span>${email}</span>
        
      `;
      remail.removeAttribute("hidden");
    } else {
      remail.setAttribute("hidden", true);
    }

    document.getElementById("rdescription").textContent = description;

    const interestInput = document.getElementById("fst-interest");
    const interestInputs = document.querySelectorAll(".interest");
    const interestGroup = document.getElementById("interestGroup");

    if (interestInputs.length > 0 && interestInput.value != "") {
      interestGroup.innerHTML = `
          <h3>Интересы</h3>
          <hr />
      `;
      interestInputs.forEach((input) => {
        const interest = input.value;
        const interestDiv = document.createElement("div");
        interestDiv.textContent = interest;
        interestGroup.appendChild(interestDiv);
      });
    } else {
      interestGroup.style.display = "none";
    }

    const languageInputs = document.querySelectorAll(".language");
    const languagesSection = document.getElementById("languagesSection");
    const languageInput = document.querySelector(".language");
    const proficiencyInput = document.querySelector(".proficiency");
    const proficiencyInputs = document.querySelectorAll(".proficiency");

    if (
      languageInputs.length > 0 &&
      languageInput.value != "" &&
      proficiencyInput.value != ""
    ) {
      languagesSection.innerHTML = `
          <h3>Языки</h3>
          <hr />
      `;
      languageInputs.forEach((input, index) => {
        const language = input.value;
        const proficiency = proficiencyInputs[index].value;
        if (language.trim() !== "" && proficiency.trim() !== "") {
          const languageDiv = document.createElement("div");
          languageDiv.innerHTML = `<div class="lang">${language}</div><div>${proficiency}</div>`;
          languagesSection.appendChild(languageDiv);
        }
      });
      languagesSection.style.display = "block";
    } else {
      languagesSection.style.display = "none";
    }

    // Получаем данные об опыте работы
    function sortByStartDate(experienceData) {
      experienceData.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
  }

    const experienceData = [];
    const experienceBlocks = document.querySelectorAll(".experience");
    if (experienceBlocks) {
      experienceBlocks.forEach((block) => {
        const position = block.querySelector(".position").value;
        const startDate = block.querySelector(".startDate").value;
        const endDate = block.querySelector(".endDate").value;
        const company = block.querySelector(".company").value;
        const details = block.querySelector(".details").value;

        const experience = {
          position,
          startDate,
          endDate,
          company,
          details,
        };
        experienceData.push(experience);
      });

      sortByStartDate(experienceData);

      // Создаем HTML-код для опыта работы
      let experienceHTML = "<h3>Опыт работы</h3><hr />";
      experienceData.forEach((item) => {
        if (item.position) {
          
          let spanDate
          if (!item.startDate) {
            spanDate = ''
          } else if (!item.endDate) {
            spanDate = `${formatDate(new Date(item.startDate))} — наст. время`
          } else if (item.startDate && item.endDate) {
            spanDate = `${formatDate(new Date(item.startDate))} — ${formatDate(new Date(item.endDate))}`
          } else {
            spanDate = ''
          }
          
        experienceHTML += `
  <div>
        <div class="exp">
          <b>${item.position}</b>
          <span>${spanDate}</span> 
        </div>
        <p class="expCompany"><i>${item.company}</i></p>
        <p class="expDetails">${item.details}</p>
      </div>`;          //TODO: если есть стартовая дата, то генерить дату
      document.getElementById("experienceSection").hidden = false

      function formatDate(date) {
        const months = [
            "январь", "февраль", "март",
            "апрель", "май", "июнь",
            "июль", "август", "сентябрь",
            "октябрь", "ноябрь", "декабрь"
        ];
    
        const monthIndex = date.getMonth();
        const year = date.getFullYear();
    
        return `${months[monthIndex]} ${year} г.`;
    }
    } else {
        document.getElementById("experienceSection").hidden = true
      }
      });

      // Вставляем HTML-код для опыта работы на страницу
      document.getElementById("experienceSection").innerHTML = experienceHTML;
    }

    // Получаем данные об опыте работы
    function sortByStartDate(educationData) {
      educationData.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
  }

    const educationData = [];
    const educationBlocks = document.querySelectorAll(".education");
    if (educationBlocks) {
      educationBlocks.forEach((block) => {
        const degree = block.querySelector(".degree").value;
        const startDate = block.querySelector(".startDate").value;
        const endDate = block.querySelector(".endDate").value;
        const institution = block.querySelector(".institution").value;
        const details = block.querySelector(".details").value;

        const education = {
          degree,
          startDate,
          endDate,
          institution,
          details,
        };
        educationData.push(education);
      });

      sortByStartDate(educationData);

      // Создаем HTML-код для опыта работы
      let educationHTML = "<h3>Образование и квалификация</h3><hr />";
      educationData.forEach((item) => {
        if (item.degree) {
          
          let spanDate
          if (!item.startDate) {
            spanDate = ''
          } else if (!item.endDate) {
            spanDate = `${formatDate(new Date(item.startDate))} — наст. время`
          } else if (item.startDate && item.endDate) {
            spanDate = `${formatDate(new Date(item.startDate))} — ${formatDate(new Date(item.endDate))}`
          } else {
            spanDate = ''
          }
          
        educationHTML += `
  <div>
        <div class="edu">
          <b>${item.degree}</b>
          <span>${spanDate}</span> 
        </div>
        <p class="eduInstitution"><i>${item.institution}</i></p>
        <p class="eduDetails">${item.details}</p>
      </div>`;          //TODO: если есть стартовая дата, то генерить дату
      document.getElementById("educationSection").hidden = false

      function formatDate(date) {
        const months = [
            "январь", "февраль", "март",
            "апрель", "май", "июнь",
            "июль", "август", "сентябрь",
            "октябрь", "ноябрь", "декабрь"
        ];
    
        const monthIndex = date.getMonth();
        const year = date.getFullYear();
    
        return `${months[monthIndex]} ${year} г.`;
    }
    } else {
        document.getElementById("educationSection").hidden = true
      }
      });

      // Вставляем HTML-код для опыта работы на страницу
      document.getElementById("educationSection").innerHTML = educationHTML;
    }

        // Получаем данные об опыте работы
        function sortByStartDate(courseData) {
          courseData.sort((a, b) => new Date(b.startDate) - new Date(a.startDate));
      }
    
        const courseData = [];
        const courseBlocks = document.querySelectorAll(".courses");
        if (courseBlocks) {
          courseBlocks.forEach((block) => {
            const courseName = block.querySelector(".course").value;
            const startDate = block.querySelector(".startDate").value;
            const endDate = block.querySelector(".endDate").value;
            const organization = block.querySelector(".organization").value;
    
            const course = {
              courseName,
              startDate,
              endDate,
              organization,
            };
            courseData.push(course);
          });
    
          sortByStartDate(courseData);
    
          // Создаем HTML-код для опыта работы
          let courseHTML = "<h3>Курсы</h3><hr />";
          courseData.forEach((item) => {
            if (item.courseName) {
              
              let spanDate
              if (!item.startDate) {
                spanDate = ''
              } else if (!item.endDate) {
                spanDate = `${formatDate(new Date(item.startDate))} — наст. время`
              } else if (item.startDate && item.endDate) {
                spanDate = `${formatDate(new Date(item.startDate))} — ${formatDate(new Date(item.endDate))}`
              } else {
                spanDate = ''
              }
              
            courseHTML += `
      <div>
            <div class="crs">
              <b>${item.courseName}</b>
              <span>${spanDate}</span> 
            </div>
            <p class="crsOrganization"><i>${item.organization}</i></p>
          </div>`;          //TODO: если есть стартовая дата, то генерить дату
          document.getElementById("courseSection").hidden = false
    
          function formatDate(date) {
            const months = [
                "январь", "февраль", "март",
                "апрель", "май", "июнь",
                "июль", "август", "сентябрь",
                "октябрь", "ноябрь", "декабрь"
            ];
        
            const monthIndex = date.getMonth();
            const year = date.getFullYear();
        
            return `${months[monthIndex]} ${year} г.`;
        }
        } else {
            document.getElementById("courseSection").hidden = true
          }
          });
    
          // Вставляем HTML-код для опыта работы на страницу
          document.getElementById("courseSection").innerHTML = courseHTML;
        }
  }
});

var textareaDescription = document.querySelector(".textareaDescriptionResize");

textareaDescription.addEventListener("keyup", function () {
  if (this.scrollTop > 0) {
    this.style.height = this.scrollHeight + "px";
  }
});

var textareaExperience = document.querySelector(".textareaExperienceResize");

textareaExperience.addEventListener("keyup", function () {
  if (this.scrollTop > 0) {
    this.style.height = this.scrollHeight + "px";
  }
});

var textareaEducation = document.querySelector(".textareaEducationResize");

textareaEducation.addEventListener("keyup", function () {
  if (this.scrollTop > 0) {
    this.style.height = this.scrollHeight + "px";
  }
});
