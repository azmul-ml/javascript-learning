let person = {
    name: "Azmul Hossain",
    skills: ["Javascript", "React", "Angular"],
    showSkills() {
        this.skills.forEach(function(skill){
            console.log(this.name, skill);
        })
    }
}

person.showSkills();