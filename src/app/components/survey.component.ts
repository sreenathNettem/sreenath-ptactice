import { Component, OnInit } from "@angular/core";
import { Model, StylesManager } from "survey-core";
import { json } from "./json";
import "./survey.component.css";
import "survey-core/defaultV2.min.css";
StylesManager.applyTheme("defaultV2");
@Component({
    // tslint:disable-next-line:component-selector
    selector: "component-survey",
    templateUrl: "./survey.component.html",
    styleUrls: ["./survey.component.css"]
})
export class SurveyComponent implements OnInit {
    model: Model;
    ngOnInit() {
        const survey = new Model(json);
        survey.data = {'frameworksRate': [{'framework':'angular v1'},{'framework':'angular v2+'},{'framework':'react'}, {'framework':'vue'}]};
        this.model = survey;
    }
}
