import { postMethod } from './methods.ts';
import * as dotenv from "dotenv";
//import * as assert from  "assert";
dotenv.config();export class jiraObject {
	private testcaseStatus: string ;
	public testStepStatus: any[];
	public actualResultString: any[];
	private statusflag: number;
	private testiteration: number;

	constructor() {
		this.statusflag = 0;
		this.testiteration = 0;
		this.testStepStatus = [];
		this.actualResultString= [];
		this.testcaseStatus="Pass";

	}

	public get getstatusflag(): number {
		return this.statusflag;
	}
	public set setstatusflag(value: number) {
		this.statusflag = value;
	}

	public get gettestiteration(): number {
		return this.testiteration;
	}
	public set settestiteration(value: number) {
		this.testiteration = value;
	}

	public addTestStepStatus(value: any) {
		this.testStepStatus.push(value);
	}
	public addActualResultString(value: any) {
		this.actualResultString.push(value);
	}
	public incrementTestIteration() {
		this.testiteration = this.testiteration + 1;
	}
	public statusFlagIncreamenter() {
		this.statusflag = this.statusflag + 1;
	}

	public get gettestcaseStatus(): string|any {
		return this.testcaseStatus;
	}
	public set settestcaseStatus(value: string) {
		this.testcaseStatus = value;
	}

	public jiraSync = async (
		fprojectKey: string | any,
		ftestCaseKey: string | any,
		ftestCycleKey: string | any,
		fstatusName: string | any,
		countIt: number
	) => {
		let tsStatus: any;
		let actualResultString: any;
		const rawTestResultData: any = [];
		const actualEndDate = new Date().toISOString();
		const postUrl = 'https://api.zephyrscale.smartbear.com';
		const urlParam = '/v2/testexecutions';
		let jiraToken:any = process.env.JIRATOKENKEY;
		//console.log(this.gettestiteration);
		console.log(this.actualResultString);

		if (countIt <= this.actualResultString.length) {
			tsStatus = this.testStepStatus;
			actualResultString = this.actualResultString;
			//console.log("this is countit data");
			//console.log(actualResultString);
		}
		for (let i = 0; i < tsStatus.length; i++) {
			let aStringOne = {};
			aStringOne = Object.assign(aStringOne, { statusName: tsStatus[i] });
			aStringOne = Object.assign(aStringOne, { actualEndDate: actualEndDate });
			aStringOne = Object.assign(aStringOne, { actualResult: actualResultString[i] });
			rawTestResultData.push(aStringOne);
			console.log(rawTestResultData);
		}

		const payload = {
			projectKey: fprojectKey,
			testCaseKey: ftestCaseKey,
			testCycleKey: ftestCycleKey,
			statusName: fstatusName,
		};

		if (tsStatus.length > 0) {
			Object.assign(payload, { testScriptResults: rawTestResultData });
		}
		//Making Post Call using existing Methods from Utils
		console.log(payload);
		console.log(postUrl);
		console.log(jiraToken);
		const createjiraSyncentry = await postMethod(postUrl, urlParam, jiraToken, payload);
	};
}