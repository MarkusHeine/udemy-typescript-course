import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv("football.csv");
matchReader.load();

const htmlSummary = Summary.winsAnalysisWithHtmlReport("Man United");
htmlSummary.buildAndPrintReport(matchReader.matches);

const printSummary = Summary.winsAnalysisWithConsolePrint("Chelsea");
printSummary.buildAndPrintReport(matchReader.matches);
w;
