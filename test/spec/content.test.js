describe('testing content', function () {
    'use strict';

    var content;
    beforeEach(function(){
        jasmine.getFixtures().fixturesPath = "base/src/";
        content = JSON.parse(readFixtures("content.json"));
    });
    var actions = {};

    actions.getAllEntities = function(prefix){
        var practices = [];
        for(var prop in content){
            if(prop.startsWith(prefix)){
                practices.push(content[prop]);
            }
        }
        return practices;
    };

    actions.allQuestionHasCategoryId = function(entity){
        var questions = entity.questions;
        var isValid = true;
        questions.forEach(function(question){
            var isValidQuestion = !!(question.categoryId || question.categoryId === 0);
            if(!isValidQuestion){
                isValid = false;
                console.log('question does not has category id');
            }
        });
        return isValid;
    };

    it('check if score table exits', function () {
        expect(content.scoretable).toBeDefined();
    });

    it('check if practices exits', function () {
        expect(actions.getAllEntities('practice').length).not.toBe(0);
    });

    it('check all practices has questions', function () {
        var practices = actions.getAllEntities('practice');
        practices.forEach(function(practice){
            if(!practice.questions.length){
                console.log(practice.id);
            }
            expect(practice.questions.length).not.toBe(0);
        });
    });

    it('check all practices questions has category id', function () {
        var practices = actions.getAllEntities('practice');
        practices.forEach(function(practice){
            expect(actions.allQuestionHasCategoryId(practice)).toBeTruthy();
        });
    });

    it('check all drill questions has category id', function () {
        var drills = actions.getAllEntities('drill');
        drills.forEach(function(drill){
            expect(actions.allQuestionHasCategoryId(drill)).toBeTruthy();
        });
    });

    it('check if all drills has questions', function () {
        var drills = actions.getAllEntities('drill');
        drills.forEach(function(drill){
            if(!drill.questions.length){
                console.log(drill.id);
            }
            expect(drill.questions.length).not.toBe(0);
        });
    });
});