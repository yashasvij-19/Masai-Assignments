const Amar = {
    name: "Amar",
    work: "Singer",
    lives_in : "Goa",
    borrowSkill(){
        console.log(`Now, I can also work as a ${this.work} as I have borrwed this skill from ${this.name} who lives in ${this.lives_in}.`);
    },
}

const Akbar = {
    name: "Akbar",
    work: "Chef",
    lives_in : "Mumbai",
    borrowSkillB(){
        console.log(`Now, I can also work as a ${this.work} as I have borrwed this skill from ${this.name} who lives in ${this.lives_in}.`);
    },
}


const Anthony = {
    name: "Anthony",
    work: "Magician",
    lives_in : "Kashmir",
    borrowSkillA(){
        console.log(`Now, I can also work as a ${this.work} as I have borrwed this skill from ${this.name} who lives in ${this.lives_in}.`);
    },
}

Amar.borrowSkill.call(Akbar)
Amar.borrowSkill.call(Anthony)

Akbar.borrowSkillB.call(Amar)
Akbar.borrowSkillB.call(Anthony)

Anthony.borrowSkillA.call(Akbar)
Anthony.borrowSkillA.call(Amar)



