// Generated from presentable_policy.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var presentable_policyListener = require('./presentable_policyListener').presentable_policyListener;
var grammarFileName = "presentable_policy.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003$\u00da\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0003",
    "\u0002\u0007\u0002>\n\u0002\f\u0002\u000e\u0002A\u000b\u0002\u0003\u0002",
    "\u0003\u0002\u0003\u0003\u0003\u0003\u0006\u0003G\n\u0003\r\u0003\u000e",
    "\u0003H\u0003\u0003\u0003\u0003\u0007\u0003M\n\u0003\f\u0003\u000e\u0003",
    "P\u000b\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0007\u0004X\n\u0004\f\u0004\u000e\u0004[\u000b\u0004",
    "\u0003\u0005\u0003\u0005\u0003\u0005\u0006\u0005`\n\u0005\r\u0005\u000e",
    "\u0005a\u0005\u0005d\n\u0005\u0003\u0006\u0003\u0006\u0003\u0006\u0003",
    "\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007n",
    "\n\u0007\f\u0007\u000e\u0007q\u000b\u0007\u0003\u0007\u0003\u0007\u0007",
    "\u0007u\n\u0007\f\u0007\u000e\u0007x\u000b\u0007\u0003\u0007\u0005\u0007",
    "{\n\u0007\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003\b\u0003",
    "\b\u0003\b\u0003\b\u0005\b\u0087\n\b\u0003\t\u0003\t\u0003\t\u0003\n",
    "\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f",
    "\u0003\f\u0003\f\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0005\u000f\u009f\n",
    "\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0010\u0003\u0011\u0003\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0007",
    "\u0012\u00ac\n\u0012\f\u0012\u000e\u0012\u00af\u000b\u0012\u0003\u0012",
    "\u0006\u0012\u00b2\n\u0012\r\u0012\u000e\u0012\u00b3\u0003\u0013\u0003",
    "\u0013\u0005\u0013\u00b8\n\u0013\u0003\u0014\u0003\u0014\u0003\u0014",
    "\u0003\u0015\u0003\u0015\u0003\u0015\u0003\u0016\u0003\u0016\u0005\u0016",
    "\u00c2\n\u0016\u0003\u0017\u0003\u0017\u0003\u0017\u0003\u0018\u0003",
    "\u0018\u0003\u0018\u0003\u0019\u0003\u0019\u0003\u001a\u0003\u001a\u0003",
    "\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001d\u0003\u001d\u0003",
    "\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001e\u0003\u001e\u0003",
    "\u001e\u0002\u0003\u0006\u001f\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:\u0002\u0003\u0004",
    "\u0002\u0012\u0012\u001a\u001c\u0002\u00d3\u0002?\u0003\u0002\u0002",
    "\u0002\u0004D\u0003\u0002\u0002\u0002\u0006Q\u0003\u0002\u0002\u0002",
    "\bc\u0003\u0002\u0002\u0002\ne\u0003\u0002\u0002\u0002\fz\u0003\u0002",
    "\u0002\u0002\u000e\u0086\u0003\u0002\u0002\u0002\u0010\u0088\u0003\u0002",
    "\u0002\u0002\u0012\u008b\u0003\u0002\u0002\u0002\u0014\u008e\u0003\u0002",
    "\u0002\u0002\u0016\u0091\u0003\u0002\u0002\u0002\u0018\u0095\u0003\u0002",
    "\u0002\u0002\u001a\u0097\u0003\u0002\u0002\u0002\u001c\u009e\u0003\u0002",
    "\u0002\u0002\u001e\u00a0\u0003\u0002\u0002\u0002 \u00a6\u0003\u0002",
    "\u0002\u0002\"\u00a9\u0003\u0002\u0002\u0002$\u00b7\u0003\u0002\u0002",
    "\u0002&\u00b9\u0003\u0002\u0002\u0002(\u00bc\u0003\u0002\u0002\u0002",
    "*\u00c1\u0003\u0002\u0002\u0002,\u00c3\u0003\u0002\u0002\u0002.\u00c6",
    "\u0003\u0002\u0002\u00020\u00c9\u0003\u0002\u0002\u00022\u00cb\u0003",
    "\u0002\u0002\u00024\u00cd\u0003\u0002\u0002\u00026\u00cf\u0003\u0002",
    "\u0002\u00028\u00d1\u0003\u0002\u0002\u0002:\u00d5\u0003\u0002\u0002",
    "\u0002<>\u0005\u0004\u0003\u0002=<\u0003\u0002\u0002\u0002>A\u0003\u0002",
    "\u0002\u0002?=\u0003\u0002\u0002\u0002?@\u0003\u0002\u0002\u0002@B\u0003",
    "\u0002\u0002\u0002A?\u0003\u0002\u0002\u0002BC\u0007\u0002\u0002\u0003",
    "C\u0003\u0003\u0002\u0002\u0002DF\u0007\u001d\u0002\u0002EG\u0005\u0006",
    "\u0004\u0002FE\u0003\u0002\u0002\u0002GH\u0003\u0002\u0002\u0002HF\u0003",
    "\u0002\u0002\u0002HI\u0003\u0002\u0002\u0002IJ\u0003\u0002\u0002\u0002",
    "JN\u0007\u0003\u0002\u0002KM\u0005\b\u0005\u0002LK\u0003\u0002\u0002",
    "\u0002MP\u0003\u0002\u0002\u0002NL\u0003\u0002\u0002\u0002NO\u0003\u0002",
    "\u0002\u0002O\u0005\u0003\u0002\u0002\u0002PN\u0003\u0002\u0002\u0002",
    "QR\b\u0004\u0001\u0002RS\u00054\u001b\u0002SY\u0003\u0002\u0002\u0002",
    "TU\f\u0003\u0002\u0002UV\u0007\u0004\u0002\u0002VX\u0005\u0006\u0004",
    "\u0004WT\u0003\u0002\u0002\u0002X[\u0003\u0002\u0002\u0002YW\u0003\u0002",
    "\u0002\u0002YZ\u0003\u0002\u0002\u0002Z\u0007\u0003\u0002\u0002\u0002",
    "[Y\u0003\u0002\u0002\u0002\\d\u0007\u001e\u0002\u0002]_\u0005\n\u0006",
    "\u0002^`\u0005\f\u0007\u0002_^\u0003\u0002\u0002\u0002`a\u0003\u0002",
    "\u0002\u0002a_\u0003\u0002\u0002\u0002ab\u0003\u0002\u0002\u0002bd\u0003",
    "\u0002\u0002\u0002c\\\u0003\u0002\u0002\u0002c]\u0003\u0002\u0002\u0002",
    "d\t\u0003\u0002\u0002\u0002ef\u0007\u0005\u0002\u0002fg\u0007!\u0002",
    "\u0002gh\u0007\u0003\u0002\u0002h\u000b\u0003\u0002\u0002\u0002ij\u0007",
    "\u0006\u0002\u0002jk\u0007!\u0002\u0002ko\u0007\u0007\u0002\u0002ln",
    "\u0007\b\u0002\u0002ml\u0003\u0002\u0002\u0002nq\u0003\u0002\u0002\u0002",
    "om\u0003\u0002\u0002\u0002op\u0003\u0002\u0002\u0002pr\u0003\u0002\u0002",
    "\u0002qo\u0003\u0002\u0002\u0002rv\u0005\u000e\b\u0002su\u0005\u0010",
    "\t\u0002ts\u0003\u0002\u0002\u0002ux\u0003\u0002\u0002\u0002vt\u0003",
    "\u0002\u0002\u0002vw\u0003\u0002\u0002\u0002w{\u0003\u0002\u0002\u0002",
    "xv\u0003\u0002\u0002\u0002y{\u0007\u001e\u0002\u0002zi\u0003\u0002\u0002",
    "\u0002zy\u0003\u0002\u0002\u0002{\r\u0003\u0002\u0002\u0002|\u0087\u0005",
    "\u0012\n\u0002}\u0087\u0005\u0014\u000b\u0002~\u0087\u0005\u0016\f\u0002",
    "\u007f\u0087\u0005\u0018\r\u0002\u0080\u0087\u0005\u001a\u000e\u0002",
    "\u0081\u0087\u0005\u001c\u000f\u0002\u0082\u0087\u0005\"\u0012\u0002",
    "\u0083\u0087\u0005$\u0013\u0002\u0084\u0087\u0005*\u0016\u0002\u0085",
    "\u0087\u00050\u0019\u0002\u0086|\u0003\u0002\u0002\u0002\u0086}\u0003",
    "\u0002\u0002\u0002\u0086~\u0003\u0002\u0002\u0002\u0086\u007f\u0003",
    "\u0002\u0002\u0002\u0086\u0080\u0003\u0002\u0002\u0002\u0086\u0081\u0003",
    "\u0002\u0002\u0002\u0086\u0082\u0003\u0002\u0002\u0002\u0086\u0083\u0003",
    "\u0002\u0002\u0002\u0086\u0084\u0003\u0002\u0002\u0002\u0086\u0085\u0003",
    "\u0002\u0002\u0002\u0087\u000f\u0003\u0002\u0002\u0002\u0088\u0089\u0007",
    "\t\u0002\u0002\u0089\u008a\u0005\u000e\b\u0002\u008a\u0011\u0003\u0002",
    "\u0002\u0002\u008b\u008c\u0007\n\u0002\u0002\u008c\u008d\u00056\u001c",
    "\u0002\u008d\u0013\u0003\u0002\u0002\u0002\u008e\u008f\u0007\u000b\u0002",
    "\u0002\u008f\u0090\u0007$\u0002\u0002\u0090\u0015\u0003\u0002\u0002",
    "\u0002\u0091\u0092\u0007\u001f\u0002\u0002\u0092\u0093\u00056\u001c",
    "\u0002\u0093\u0094\u0007\f\u0002\u0002\u0094\u0017\u0003\u0002\u0002",
    "\u0002\u0095\u0096\u0007\r\u0002\u0002\u0096\u0019\u0003\u0002\u0002",
    "\u0002\u0097\u0098\u0007\u000e\u0002\u0002\u0098\u0099\u0007\u001f\u0002",
    "\u0002\u0099\u009a\u0007\u000f\u0002\u0002\u009a\u009b\u0007 \u0002",
    "\u0002\u009b\u001b\u0003\u0002\u0002\u0002\u009c\u009f\u0005\u001e\u0010",
    "\u0002\u009d\u009f\u0005 \u0011\u0002\u009e\u009c\u0003\u0002\u0002",
    "\u0002\u009e\u009d\u0003\u0002\u0002\u0002\u009f\u001d\u0003\u0002\u0002",
    "\u0002\u00a0\u00a1\u0007\u0010\u0002\u0002\u00a1\u00a2\u0007\u001f\u0002",
    "\u0002\u00a2\u00a3\u0007\u0011\u0002\u0002\u00a3\u00a4\u0007\u001f\u0002",
    "\u0002\u00a4\u00a5\u0007\u0012\u0002\u0002\u00a5\u001f\u0003\u0002\u0002",
    "\u0002\u00a6\u00a7\u0007\u0013\u0002\u0002\u00a7\u00a8\u0007\u001f\u0002",
    "\u0002\u00a8!\u0003\u0002\u0002\u0002\u00a9\u00b1\u0007\u0014\u0002",
    "\u0002\u00aa\u00ac\u0007\u0004\u0002\u0002\u00ab\u00aa\u0003\u0002\u0002",
    "\u0002\u00ac\u00af\u0003\u0002\u0002\u0002\u00ad\u00ab\u0003\u0002\u0002",
    "\u0002\u00ad\u00ae\u0003\u0002\u0002\u0002\u00ae\u00b0\u0003\u0002\u0002",
    "\u0002\u00af\u00ad\u0003\u0002\u0002\u0002\u00b0\u00b2\u00052\u001a",
    "\u0002\u00b1\u00ad\u0003\u0002\u0002\u0002\u00b2\u00b3\u0003\u0002\u0002",
    "\u0002\u00b3\u00b1\u0003\u0002\u0002\u0002\u00b3\u00b4\u0003\u0002\u0002",
    "\u0002\u00b4#\u0003\u0002\u0002\u0002\u00b5\u00b8\u0005&\u0014\u0002",
    "\u00b6\u00b8\u0005(\u0015\u0002\u00b7\u00b5\u0003\u0002\u0002\u0002",
    "\u00b7\u00b6\u0003\u0002\u0002\u0002\u00b8%\u0003\u0002\u0002\u0002",
    "\u00b9\u00ba\u0007\u0015\u0002\u0002\u00ba\u00bb\u0007\u001f\u0002\u0002",
    "\u00bb\'\u0003\u0002\u0002\u0002\u00bc\u00bd\u0007\u0016\u0002\u0002",
    "\u00bd\u00be\u0007\u001f\u0002\u0002\u00be)\u0003\u0002\u0002\u0002",
    "\u00bf\u00c2\u0005,\u0017\u0002\u00c0\u00c2\u0005.\u0018\u0002\u00c1",
    "\u00bf\u0003\u0002\u0002\u0002\u00c1\u00c0\u0003\u0002\u0002\u0002\u00c2",
    "+\u0003\u0002\u0002\u0002\u00c3\u00c4\u0007\u0017\u0002\u0002\u00c4",
    "\u00c5\u0007\u001f\u0002\u0002\u00c5-\u0003\u0002\u0002\u0002\u00c6",
    "\u00c7\u0007\u0018\u0002\u0002\u00c7\u00c8\u0007\u001f\u0002\u0002\u00c8",
    "/\u0003\u0002\u0002\u0002\u00c9\u00ca\u0007\u0019\u0002\u0002\u00ca",
    "1\u0003\u0002\u0002\u0002\u00cb\u00cc\u0007!\u0002\u0002\u00cc3\u0003",
    "\u0002\u0002\u0002\u00cd\u00ce\u0007!\u0002\u0002\u00ce5\u0003\u0002",
    "\u0002\u0002\u00cf\u00d0\t\u0002\u0002\u0002\u00d07\u0003\u0002\u0002",
    "\u0002\u00d1\u00d2\u0007\u001f\u0002\u0002\u00d2\u00d3\u0007\u0003\u0002",
    "\u0002\u00d3\u00d4\u0007\u001f\u0002\u0002\u00d49\u0003\u0002\u0002",
    "\u0002\u00d5\u00d6\u0007\u001f\u0002\u0002\u00d6\u00d7\u0007\u0003\u0002",
    "\u0002\u00d7\u00d8\u0007\u001f\u0002\u0002\u00d8;\u0003\u0002\u0002",
    "\u0002\u0011?HNYacovz\u0086\u009e\u00ad\u00b3\u00b7\u00c1"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "':'", "','", "'in'", "'proceed to'", "'on'", 
                     "'accepting'", "'and on'", "'the end of'", "'date'", 
                     "'after contract creation'", "'price priceExpression'", 
                     "'transaction of'", "'to'", "'contract_guaranty of'", 
                     "'refund after'", "'day'", "'platform_guaranty of'", 
                     "'license'", "'visit_increment of'", "'visit of'", 
                     "'account_balance greater than'", "'account_balance smaller than'", 
                     "'account_settled'", "'year'", "'week'", "'cycle'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      "FOR", "TERMINATE", "INTEGER_NUMBER", "FEATHERACCOUNT", 
                      "ID", "USERACCOUNT", "WS", "DATE" ];

var ruleNames =  [ "p", "segment", "audience_clause", "state_clause", "current_state_clause", 
                   "target_clause", "event", "and_event", "period_event", 
                   "specific_date_event", "relative_date_event", "pricing_agreement_event", 
                   "transaction_event", "guaranty_event", "contract_guaranty", 
                   "platform_guaranty", "signing_event", "access_count_event", 
                   "visit_increment_event", "visit_event", "balance_event", 
                   "balance_greater", "balance_smaller", "settlement_event", 
                   "license_resource_id", "users", "time_unit", "start_hour", 
                   "end_hour" ];

function presentable_policyParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

presentable_policyParser.prototype = Object.create(antlr4.Parser.prototype);
presentable_policyParser.prototype.constructor = presentable_policyParser;

Object.defineProperty(presentable_policyParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

presentable_policyParser.EOF = antlr4.Token.EOF;
presentable_policyParser.T__0 = 1;
presentable_policyParser.T__1 = 2;
presentable_policyParser.T__2 = 3;
presentable_policyParser.T__3 = 4;
presentable_policyParser.T__4 = 5;
presentable_policyParser.T__5 = 6;
presentable_policyParser.T__6 = 7;
presentable_policyParser.T__7 = 8;
presentable_policyParser.T__8 = 9;
presentable_policyParser.T__9 = 10;
presentable_policyParser.T__10 = 11;
presentable_policyParser.T__11 = 12;
presentable_policyParser.T__12 = 13;
presentable_policyParser.T__13 = 14;
presentable_policyParser.T__14 = 15;
presentable_policyParser.T__15 = 16;
presentable_policyParser.T__16 = 17;
presentable_policyParser.T__17 = 18;
presentable_policyParser.T__18 = 19;
presentable_policyParser.T__19 = 20;
presentable_policyParser.T__20 = 21;
presentable_policyParser.T__21 = 22;
presentable_policyParser.T__22 = 23;
presentable_policyParser.T__23 = 24;
presentable_policyParser.T__24 = 25;
presentable_policyParser.T__25 = 26;
presentable_policyParser.FOR = 27;
presentable_policyParser.TERMINATE = 28;
presentable_policyParser.INTEGER_NUMBER = 29;
presentable_policyParser.FEATHERACCOUNT = 30;
presentable_policyParser.ID = 31;
presentable_policyParser.USERACCOUNT = 32;
presentable_policyParser.WS = 33;
presentable_policyParser.DATE = 34;

presentable_policyParser.RULE_p = 0;
presentable_policyParser.RULE_segment = 1;
presentable_policyParser.RULE_audience_clause = 2;
presentable_policyParser.RULE_state_clause = 3;
presentable_policyParser.RULE_current_state_clause = 4;
presentable_policyParser.RULE_target_clause = 5;
presentable_policyParser.RULE_event = 6;
presentable_policyParser.RULE_and_event = 7;
presentable_policyParser.RULE_period_event = 8;
presentable_policyParser.RULE_specific_date_event = 9;
presentable_policyParser.RULE_relative_date_event = 10;
presentable_policyParser.RULE_pricing_agreement_event = 11;
presentable_policyParser.RULE_transaction_event = 12;
presentable_policyParser.RULE_guaranty_event = 13;
presentable_policyParser.RULE_contract_guaranty = 14;
presentable_policyParser.RULE_platform_guaranty = 15;
presentable_policyParser.RULE_signing_event = 16;
presentable_policyParser.RULE_access_count_event = 17;
presentable_policyParser.RULE_visit_increment_event = 18;
presentable_policyParser.RULE_visit_event = 19;
presentable_policyParser.RULE_balance_event = 20;
presentable_policyParser.RULE_balance_greater = 21;
presentable_policyParser.RULE_balance_smaller = 22;
presentable_policyParser.RULE_settlement_event = 23;
presentable_policyParser.RULE_license_resource_id = 24;
presentable_policyParser.RULE_users = 25;
presentable_policyParser.RULE_time_unit = 26;
presentable_policyParser.RULE_start_hour = 27;
presentable_policyParser.RULE_end_hour = 28;

function PContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_p;
    return this;
}

PContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PContext.prototype.constructor = PContext;

PContext.prototype.EOF = function() {
    return this.getToken(presentable_policyParser.EOF, 0);
};

PContext.prototype.segment = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(SegmentContext);
    } else {
        return this.getTypedRuleContext(SegmentContext,i);
    }
};

PContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterP(this);
	}
};

PContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitP(this);
	}
};




presentable_policyParser.PContext = PContext;

presentable_policyParser.prototype.p = function() {

    var localctx = new PContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, presentable_policyParser.RULE_p);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 61;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===presentable_policyParser.FOR) {
            this.state = 58;
            this.segment();
            this.state = 63;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 64;
        this.match(presentable_policyParser.EOF);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function SegmentContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_segment;
    return this;
}

SegmentContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
SegmentContext.prototype.constructor = SegmentContext;

SegmentContext.prototype.FOR = function() {
    return this.getToken(presentable_policyParser.FOR, 0);
};

SegmentContext.prototype.audience_clause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Audience_clauseContext);
    } else {
        return this.getTypedRuleContext(Audience_clauseContext,i);
    }
};

SegmentContext.prototype.state_clause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(State_clauseContext);
    } else {
        return this.getTypedRuleContext(State_clauseContext,i);
    }
};

SegmentContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterSegment(this);
	}
};

SegmentContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitSegment(this);
	}
};




presentable_policyParser.SegmentContext = SegmentContext;

presentable_policyParser.prototype.segment = function() {

    var localctx = new SegmentContext(this, this._ctx, this.state);
    this.enterRule(localctx, 2, presentable_policyParser.RULE_segment);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 66;
        this.match(presentable_policyParser.FOR);
        this.state = 68; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 67;
            this.audience_clause(0);
            this.state = 70; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===presentable_policyParser.ID);
        this.state = 72;
        this.match(presentable_policyParser.T__0);
        this.state = 76;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===presentable_policyParser.T__2 || _la===presentable_policyParser.TERMINATE) {
            this.state = 73;
            this.state_clause();
            this.state = 78;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Audience_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_audience_clause;
    return this;
}

Audience_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Audience_clauseContext.prototype.constructor = Audience_clauseContext;

Audience_clauseContext.prototype.users = function() {
    return this.getTypedRuleContext(UsersContext,0);
};

Audience_clauseContext.prototype.audience_clause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Audience_clauseContext);
    } else {
        return this.getTypedRuleContext(Audience_clauseContext,i);
    }
};

Audience_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterAudience_clause(this);
	}
};

Audience_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitAudience_clause(this);
	}
};



presentable_policyParser.prototype.audience_clause = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Audience_clauseContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, presentable_policyParser.RULE_audience_clause, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 80;
        this.users();
        this._ctx.stop = this._input.LT(-1);
        this.state = 87;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                localctx = new Audience_clauseContext(this, _parentctx, _parentState);
                this.pushNewRecursionContext(localctx, _startState, presentable_policyParser.RULE_audience_clause);
                this.state = 82;
                if (!( this.precpred(this._ctx, 1))) {
                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                }
                this.state = 83;
                this.match(presentable_policyParser.T__1);
                this.state = 84;
                this.audience_clause(2); 
            }
            this.state = 89;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};

function State_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_state_clause;
    return this;
}

State_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
State_clauseContext.prototype.constructor = State_clauseContext;

State_clauseContext.prototype.TERMINATE = function() {
    return this.getToken(presentable_policyParser.TERMINATE, 0);
};

State_clauseContext.prototype.current_state_clause = function() {
    return this.getTypedRuleContext(Current_state_clauseContext,0);
};

State_clauseContext.prototype.target_clause = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Target_clauseContext);
    } else {
        return this.getTypedRuleContext(Target_clauseContext,i);
    }
};

State_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterState_clause(this);
	}
};

State_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitState_clause(this);
	}
};




presentable_policyParser.State_clauseContext = State_clauseContext;

presentable_policyParser.prototype.state_clause = function() {

    var localctx = new State_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, presentable_policyParser.RULE_state_clause);
    try {
        this.state = 97;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case presentable_policyParser.TERMINATE:
            this.enterOuterAlt(localctx, 1);
            this.state = 90;
            this.match(presentable_policyParser.TERMINATE);
            break;
        case presentable_policyParser.T__2:
            this.enterOuterAlt(localctx, 2);
            this.state = 91;
            this.current_state_clause();
            this.state = 93; 
            this._errHandler.sync(this);
            var _alt = 1;
            do {
            	switch (_alt) {
            	case 1:
            		this.state = 92;
            		this.target_clause();
            		break;
            	default:
            		throw new antlr4.error.NoViableAltException(this);
            	}
            	this.state = 95; 
            	this._errHandler.sync(this);
            	_alt = this._interp.adaptivePredict(this._input,4, this._ctx);
            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Current_state_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_current_state_clause;
    return this;
}

Current_state_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Current_state_clauseContext.prototype.constructor = Current_state_clauseContext;

Current_state_clauseContext.prototype.ID = function() {
    return this.getToken(presentable_policyParser.ID, 0);
};

Current_state_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterCurrent_state_clause(this);
	}
};

Current_state_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitCurrent_state_clause(this);
	}
};




presentable_policyParser.Current_state_clauseContext = Current_state_clauseContext;

presentable_policyParser.prototype.current_state_clause = function() {

    var localctx = new Current_state_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, presentable_policyParser.RULE_current_state_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 99;
        this.match(presentable_policyParser.T__2);
        this.state = 100;
        this.match(presentable_policyParser.ID);
        this.state = 101;
        this.match(presentable_policyParser.T__0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Target_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_target_clause;
    return this;
}

Target_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Target_clauseContext.prototype.constructor = Target_clauseContext;

Target_clauseContext.prototype.ID = function() {
    return this.getToken(presentable_policyParser.ID, 0);
};

Target_clauseContext.prototype.event = function() {
    return this.getTypedRuleContext(EventContext,0);
};

Target_clauseContext.prototype.and_event = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(And_eventContext);
    } else {
        return this.getTypedRuleContext(And_eventContext,i);
    }
};

Target_clauseContext.prototype.TERMINATE = function() {
    return this.getToken(presentable_policyParser.TERMINATE, 0);
};

Target_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterTarget_clause(this);
	}
};

Target_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitTarget_clause(this);
	}
};




presentable_policyParser.Target_clauseContext = Target_clauseContext;

presentable_policyParser.prototype.target_clause = function() {

    var localctx = new Target_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, presentable_policyParser.RULE_target_clause);
    var _la = 0; // Token type
    try {
        this.state = 120;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case presentable_policyParser.T__3:
            this.enterOuterAlt(localctx, 1);
            this.state = 103;
            this.match(presentable_policyParser.T__3);
            this.state = 104;
            this.match(presentable_policyParser.ID);
            this.state = 105;
            this.match(presentable_policyParser.T__4);
            this.state = 109;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===presentable_policyParser.T__5) {
                this.state = 106;
                this.match(presentable_policyParser.T__5);
                this.state = 111;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 112;
            this.event();
            this.state = 116;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===presentable_policyParser.T__6) {
                this.state = 113;
                this.and_event();
                this.state = 118;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            break;
        case presentable_policyParser.TERMINATE:
            this.enterOuterAlt(localctx, 2);
            this.state = 119;
            this.match(presentable_policyParser.TERMINATE);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function EventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_event;
    return this;
}

EventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
EventContext.prototype.constructor = EventContext;

EventContext.prototype.period_event = function() {
    return this.getTypedRuleContext(Period_eventContext,0);
};

EventContext.prototype.specific_date_event = function() {
    return this.getTypedRuleContext(Specific_date_eventContext,0);
};

EventContext.prototype.relative_date_event = function() {
    return this.getTypedRuleContext(Relative_date_eventContext,0);
};

EventContext.prototype.pricing_agreement_event = function() {
    return this.getTypedRuleContext(Pricing_agreement_eventContext,0);
};

EventContext.prototype.transaction_event = function() {
    return this.getTypedRuleContext(Transaction_eventContext,0);
};

EventContext.prototype.guaranty_event = function() {
    return this.getTypedRuleContext(Guaranty_eventContext,0);
};

EventContext.prototype.signing_event = function() {
    return this.getTypedRuleContext(Signing_eventContext,0);
};

EventContext.prototype.access_count_event = function() {
    return this.getTypedRuleContext(Access_count_eventContext,0);
};

EventContext.prototype.balance_event = function() {
    return this.getTypedRuleContext(Balance_eventContext,0);
};

EventContext.prototype.settlement_event = function() {
    return this.getTypedRuleContext(Settlement_eventContext,0);
};

EventContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterEvent(this);
	}
};

EventContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitEvent(this);
	}
};




presentable_policyParser.EventContext = EventContext;

presentable_policyParser.prototype.event = function() {

    var localctx = new EventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, presentable_policyParser.RULE_event);
    try {
        this.state = 132;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case presentable_policyParser.T__7:
            this.enterOuterAlt(localctx, 1);
            this.state = 122;
            this.period_event();
            break;
        case presentable_policyParser.T__8:
            this.enterOuterAlt(localctx, 2);
            this.state = 123;
            this.specific_date_event();
            break;
        case presentable_policyParser.INTEGER_NUMBER:
            this.enterOuterAlt(localctx, 3);
            this.state = 124;
            this.relative_date_event();
            break;
        case presentable_policyParser.T__10:
            this.enterOuterAlt(localctx, 4);
            this.state = 125;
            this.pricing_agreement_event();
            break;
        case presentable_policyParser.T__11:
            this.enterOuterAlt(localctx, 5);
            this.state = 126;
            this.transaction_event();
            break;
        case presentable_policyParser.T__13:
        case presentable_policyParser.T__16:
            this.enterOuterAlt(localctx, 6);
            this.state = 127;
            this.guaranty_event();
            break;
        case presentable_policyParser.T__17:
            this.enterOuterAlt(localctx, 7);
            this.state = 128;
            this.signing_event();
            break;
        case presentable_policyParser.T__18:
        case presentable_policyParser.T__19:
            this.enterOuterAlt(localctx, 8);
            this.state = 129;
            this.access_count_event();
            break;
        case presentable_policyParser.T__20:
        case presentable_policyParser.T__21:
            this.enterOuterAlt(localctx, 9);
            this.state = 130;
            this.balance_event();
            break;
        case presentable_policyParser.T__22:
            this.enterOuterAlt(localctx, 10);
            this.state = 131;
            this.settlement_event();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function And_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_and_event;
    return this;
}

And_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
And_eventContext.prototype.constructor = And_eventContext;

And_eventContext.prototype.event = function() {
    return this.getTypedRuleContext(EventContext,0);
};

And_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterAnd_event(this);
	}
};

And_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitAnd_event(this);
	}
};




presentable_policyParser.And_eventContext = And_eventContext;

presentable_policyParser.prototype.and_event = function() {

    var localctx = new And_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, presentable_policyParser.RULE_and_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 134;
        this.match(presentable_policyParser.T__6);
        this.state = 135;
        this.event();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Period_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_period_event;
    return this;
}

Period_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Period_eventContext.prototype.constructor = Period_eventContext;

Period_eventContext.prototype.time_unit = function() {
    return this.getTypedRuleContext(Time_unitContext,0);
};

Period_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterPeriod_event(this);
	}
};

Period_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitPeriod_event(this);
	}
};




presentable_policyParser.Period_eventContext = Period_eventContext;

presentable_policyParser.prototype.period_event = function() {

    var localctx = new Period_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, presentable_policyParser.RULE_period_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 137;
        this.match(presentable_policyParser.T__7);
        this.state = 138;
        this.time_unit();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Specific_date_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_specific_date_event;
    return this;
}

Specific_date_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Specific_date_eventContext.prototype.constructor = Specific_date_eventContext;

Specific_date_eventContext.prototype.DATE = function() {
    return this.getToken(presentable_policyParser.DATE, 0);
};

Specific_date_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterSpecific_date_event(this);
	}
};

Specific_date_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitSpecific_date_event(this);
	}
};




presentable_policyParser.Specific_date_eventContext = Specific_date_eventContext;

presentable_policyParser.prototype.specific_date_event = function() {

    var localctx = new Specific_date_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, presentable_policyParser.RULE_specific_date_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 140;
        this.match(presentable_policyParser.T__8);
        this.state = 141;
        this.match(presentable_policyParser.DATE);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Relative_date_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_relative_date_event;
    return this;
}

Relative_date_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Relative_date_eventContext.prototype.constructor = Relative_date_eventContext;

Relative_date_eventContext.prototype.INTEGER_NUMBER = function() {
    return this.getToken(presentable_policyParser.INTEGER_NUMBER, 0);
};

Relative_date_eventContext.prototype.time_unit = function() {
    return this.getTypedRuleContext(Time_unitContext,0);
};

Relative_date_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterRelative_date_event(this);
	}
};

Relative_date_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitRelative_date_event(this);
	}
};




presentable_policyParser.Relative_date_eventContext = Relative_date_eventContext;

presentable_policyParser.prototype.relative_date_event = function() {

    var localctx = new Relative_date_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, presentable_policyParser.RULE_relative_date_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 143;
        this.match(presentable_policyParser.INTEGER_NUMBER);
        this.state = 144;
        this.time_unit();
        this.state = 145;
        this.match(presentable_policyParser.T__9);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Pricing_agreement_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_pricing_agreement_event;
    return this;
}

Pricing_agreement_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Pricing_agreement_eventContext.prototype.constructor = Pricing_agreement_eventContext;


Pricing_agreement_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterPricing_agreement_event(this);
	}
};

Pricing_agreement_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitPricing_agreement_event(this);
	}
};




presentable_policyParser.Pricing_agreement_eventContext = Pricing_agreement_eventContext;

presentable_policyParser.prototype.pricing_agreement_event = function() {

    var localctx = new Pricing_agreement_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, presentable_policyParser.RULE_pricing_agreement_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 147;
        this.match(presentable_policyParser.T__10);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Transaction_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_transaction_event;
    return this;
}

Transaction_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Transaction_eventContext.prototype.constructor = Transaction_eventContext;

Transaction_eventContext.prototype.INTEGER_NUMBER = function() {
    return this.getToken(presentable_policyParser.INTEGER_NUMBER, 0);
};

Transaction_eventContext.prototype.FEATHERACCOUNT = function() {
    return this.getToken(presentable_policyParser.FEATHERACCOUNT, 0);
};

Transaction_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterTransaction_event(this);
	}
};

Transaction_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitTransaction_event(this);
	}
};




presentable_policyParser.Transaction_eventContext = Transaction_eventContext;

presentable_policyParser.prototype.transaction_event = function() {

    var localctx = new Transaction_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, presentable_policyParser.RULE_transaction_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 149;
        this.match(presentable_policyParser.T__11);
        this.state = 150;
        this.match(presentable_policyParser.INTEGER_NUMBER);
        this.state = 151;
        this.match(presentable_policyParser.T__12);
        this.state = 152;
        this.match(presentable_policyParser.FEATHERACCOUNT);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Guaranty_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_guaranty_event;
    return this;
}

Guaranty_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Guaranty_eventContext.prototype.constructor = Guaranty_eventContext;

Guaranty_eventContext.prototype.contract_guaranty = function() {
    return this.getTypedRuleContext(Contract_guarantyContext,0);
};

Guaranty_eventContext.prototype.platform_guaranty = function() {
    return this.getTypedRuleContext(Platform_guarantyContext,0);
};

Guaranty_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterGuaranty_event(this);
	}
};

Guaranty_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitGuaranty_event(this);
	}
};




presentable_policyParser.Guaranty_eventContext = Guaranty_eventContext;

presentable_policyParser.prototype.guaranty_event = function() {

    var localctx = new Guaranty_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, presentable_policyParser.RULE_guaranty_event);
    try {
        this.state = 156;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case presentable_policyParser.T__13:
            this.enterOuterAlt(localctx, 1);
            this.state = 154;
            this.contract_guaranty();
            break;
        case presentable_policyParser.T__16:
            this.enterOuterAlt(localctx, 2);
            this.state = 155;
            this.platform_guaranty();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Contract_guarantyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_contract_guaranty;
    return this;
}

Contract_guarantyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Contract_guarantyContext.prototype.constructor = Contract_guarantyContext;

Contract_guarantyContext.prototype.INTEGER_NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(presentable_policyParser.INTEGER_NUMBER);
    } else {
        return this.getToken(presentable_policyParser.INTEGER_NUMBER, i);
    }
};


Contract_guarantyContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterContract_guaranty(this);
	}
};

Contract_guarantyContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitContract_guaranty(this);
	}
};




presentable_policyParser.Contract_guarantyContext = Contract_guarantyContext;

presentable_policyParser.prototype.contract_guaranty = function() {

    var localctx = new Contract_guarantyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 28, presentable_policyParser.RULE_contract_guaranty);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 158;
        this.match(presentable_policyParser.T__13);
        this.state = 159;
        this.match(presentable_policyParser.INTEGER_NUMBER);
        this.state = 160;
        this.match(presentable_policyParser.T__14);
        this.state = 161;
        this.match(presentable_policyParser.INTEGER_NUMBER);
        this.state = 162;
        this.match(presentable_policyParser.T__15);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Platform_guarantyContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_platform_guaranty;
    return this;
}

Platform_guarantyContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Platform_guarantyContext.prototype.constructor = Platform_guarantyContext;

Platform_guarantyContext.prototype.INTEGER_NUMBER = function() {
    return this.getToken(presentable_policyParser.INTEGER_NUMBER, 0);
};

Platform_guarantyContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterPlatform_guaranty(this);
	}
};

Platform_guarantyContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitPlatform_guaranty(this);
	}
};




presentable_policyParser.Platform_guarantyContext = Platform_guarantyContext;

presentable_policyParser.prototype.platform_guaranty = function() {

    var localctx = new Platform_guarantyContext(this, this._ctx, this.state);
    this.enterRule(localctx, 30, presentable_policyParser.RULE_platform_guaranty);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 164;
        this.match(presentable_policyParser.T__16);
        this.state = 165;
        this.match(presentable_policyParser.INTEGER_NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Signing_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_signing_event;
    return this;
}

Signing_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Signing_eventContext.prototype.constructor = Signing_eventContext;

Signing_eventContext.prototype.license_resource_id = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(License_resource_idContext);
    } else {
        return this.getTypedRuleContext(License_resource_idContext,i);
    }
};

Signing_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterSigning_event(this);
	}
};

Signing_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitSigning_event(this);
	}
};




presentable_policyParser.Signing_eventContext = Signing_eventContext;

presentable_policyParser.prototype.signing_event = function() {

    var localctx = new Signing_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 32, presentable_policyParser.RULE_signing_event);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 167;
        this.match(presentable_policyParser.T__17);
        this.state = 175; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 171;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===presentable_policyParser.T__1) {
                this.state = 168;
                this.match(presentable_policyParser.T__1);
                this.state = 173;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 174;
            this.license_resource_id();
            this.state = 177; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===presentable_policyParser.T__1 || _la===presentable_policyParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Access_count_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_access_count_event;
    return this;
}

Access_count_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Access_count_eventContext.prototype.constructor = Access_count_eventContext;

Access_count_eventContext.prototype.visit_increment_event = function() {
    return this.getTypedRuleContext(Visit_increment_eventContext,0);
};

Access_count_eventContext.prototype.visit_event = function() {
    return this.getTypedRuleContext(Visit_eventContext,0);
};

Access_count_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterAccess_count_event(this);
	}
};

Access_count_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitAccess_count_event(this);
	}
};




presentable_policyParser.Access_count_eventContext = Access_count_eventContext;

presentable_policyParser.prototype.access_count_event = function() {

    var localctx = new Access_count_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 34, presentable_policyParser.RULE_access_count_event);
    try {
        this.state = 181;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case presentable_policyParser.T__18:
            this.enterOuterAlt(localctx, 1);
            this.state = 179;
            this.visit_increment_event();
            break;
        case presentable_policyParser.T__19:
            this.enterOuterAlt(localctx, 2);
            this.state = 180;
            this.visit_event();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Visit_increment_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_visit_increment_event;
    return this;
}

Visit_increment_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Visit_increment_eventContext.prototype.constructor = Visit_increment_eventContext;

Visit_increment_eventContext.prototype.INTEGER_NUMBER = function() {
    return this.getToken(presentable_policyParser.INTEGER_NUMBER, 0);
};

Visit_increment_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterVisit_increment_event(this);
	}
};

Visit_increment_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitVisit_increment_event(this);
	}
};




presentable_policyParser.Visit_increment_eventContext = Visit_increment_eventContext;

presentable_policyParser.prototype.visit_increment_event = function() {

    var localctx = new Visit_increment_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 36, presentable_policyParser.RULE_visit_increment_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 183;
        this.match(presentable_policyParser.T__18);
        this.state = 184;
        this.match(presentable_policyParser.INTEGER_NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Visit_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_visit_event;
    return this;
}

Visit_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Visit_eventContext.prototype.constructor = Visit_eventContext;

Visit_eventContext.prototype.INTEGER_NUMBER = function() {
    return this.getToken(presentable_policyParser.INTEGER_NUMBER, 0);
};

Visit_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterVisit_event(this);
	}
};

Visit_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitVisit_event(this);
	}
};




presentable_policyParser.Visit_eventContext = Visit_eventContext;

presentable_policyParser.prototype.visit_event = function() {

    var localctx = new Visit_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 38, presentable_policyParser.RULE_visit_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 186;
        this.match(presentable_policyParser.T__19);
        this.state = 187;
        this.match(presentable_policyParser.INTEGER_NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Balance_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_balance_event;
    return this;
}

Balance_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Balance_eventContext.prototype.constructor = Balance_eventContext;

Balance_eventContext.prototype.balance_greater = function() {
    return this.getTypedRuleContext(Balance_greaterContext,0);
};

Balance_eventContext.prototype.balance_smaller = function() {
    return this.getTypedRuleContext(Balance_smallerContext,0);
};

Balance_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterBalance_event(this);
	}
};

Balance_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitBalance_event(this);
	}
};




presentable_policyParser.Balance_eventContext = Balance_eventContext;

presentable_policyParser.prototype.balance_event = function() {

    var localctx = new Balance_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 40, presentable_policyParser.RULE_balance_event);
    try {
        this.state = 191;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case presentable_policyParser.T__20:
            this.enterOuterAlt(localctx, 1);
            this.state = 189;
            this.balance_greater();
            break;
        case presentable_policyParser.T__21:
            this.enterOuterAlt(localctx, 2);
            this.state = 190;
            this.balance_smaller();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Balance_greaterContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_balance_greater;
    return this;
}

Balance_greaterContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Balance_greaterContext.prototype.constructor = Balance_greaterContext;

Balance_greaterContext.prototype.INTEGER_NUMBER = function() {
    return this.getToken(presentable_policyParser.INTEGER_NUMBER, 0);
};

Balance_greaterContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterBalance_greater(this);
	}
};

Balance_greaterContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitBalance_greater(this);
	}
};




presentable_policyParser.Balance_greaterContext = Balance_greaterContext;

presentable_policyParser.prototype.balance_greater = function() {

    var localctx = new Balance_greaterContext(this, this._ctx, this.state);
    this.enterRule(localctx, 42, presentable_policyParser.RULE_balance_greater);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 193;
        this.match(presentable_policyParser.T__20);
        this.state = 194;
        this.match(presentable_policyParser.INTEGER_NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Balance_smallerContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_balance_smaller;
    return this;
}

Balance_smallerContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Balance_smallerContext.prototype.constructor = Balance_smallerContext;

Balance_smallerContext.prototype.INTEGER_NUMBER = function() {
    return this.getToken(presentable_policyParser.INTEGER_NUMBER, 0);
};

Balance_smallerContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterBalance_smaller(this);
	}
};

Balance_smallerContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitBalance_smaller(this);
	}
};




presentable_policyParser.Balance_smallerContext = Balance_smallerContext;

presentable_policyParser.prototype.balance_smaller = function() {

    var localctx = new Balance_smallerContext(this, this._ctx, this.state);
    this.enterRule(localctx, 44, presentable_policyParser.RULE_balance_smaller);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 196;
        this.match(presentable_policyParser.T__21);
        this.state = 197;
        this.match(presentable_policyParser.INTEGER_NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Settlement_eventContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_settlement_event;
    return this;
}

Settlement_eventContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Settlement_eventContext.prototype.constructor = Settlement_eventContext;


Settlement_eventContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterSettlement_event(this);
	}
};

Settlement_eventContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitSettlement_event(this);
	}
};




presentable_policyParser.Settlement_eventContext = Settlement_eventContext;

presentable_policyParser.prototype.settlement_event = function() {

    var localctx = new Settlement_eventContext(this, this._ctx, this.state);
    this.enterRule(localctx, 46, presentable_policyParser.RULE_settlement_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 199;
        this.match(presentable_policyParser.T__22);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function License_resource_idContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_license_resource_id;
    return this;
}

License_resource_idContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
License_resource_idContext.prototype.constructor = License_resource_idContext;

License_resource_idContext.prototype.ID = function() {
    return this.getToken(presentable_policyParser.ID, 0);
};

License_resource_idContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterLicense_resource_id(this);
	}
};

License_resource_idContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitLicense_resource_id(this);
	}
};




presentable_policyParser.License_resource_idContext = License_resource_idContext;

presentable_policyParser.prototype.license_resource_id = function() {

    var localctx = new License_resource_idContext(this, this._ctx, this.state);
    this.enterRule(localctx, 48, presentable_policyParser.RULE_license_resource_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 201;
        this.match(presentable_policyParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function UsersContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_users;
    return this;
}

UsersContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
UsersContext.prototype.constructor = UsersContext;

UsersContext.prototype.ID = function() {
    return this.getToken(presentable_policyParser.ID, 0);
};

UsersContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterUsers(this);
	}
};

UsersContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitUsers(this);
	}
};




presentable_policyParser.UsersContext = UsersContext;

presentable_policyParser.prototype.users = function() {

    var localctx = new UsersContext(this, this._ctx, this.state);
    this.enterRule(localctx, 50, presentable_policyParser.RULE_users);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 203;
        this.match(presentable_policyParser.ID);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Time_unitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_time_unit;
    return this;
}

Time_unitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Time_unitContext.prototype.constructor = Time_unitContext;


Time_unitContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterTime_unit(this);
	}
};

Time_unitContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitTime_unit(this);
	}
};




presentable_policyParser.Time_unitContext = Time_unitContext;

presentable_policyParser.prototype.time_unit = function() {

    var localctx = new Time_unitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 52, presentable_policyParser.RULE_time_unit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 205;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << presentable_policyParser.T__15) | (1 << presentable_policyParser.T__23) | (1 << presentable_policyParser.T__24) | (1 << presentable_policyParser.T__25))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function Start_hourContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_start_hour;
    return this;
}

Start_hourContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Start_hourContext.prototype.constructor = Start_hourContext;

Start_hourContext.prototype.INTEGER_NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(presentable_policyParser.INTEGER_NUMBER);
    } else {
        return this.getToken(presentable_policyParser.INTEGER_NUMBER, i);
    }
};


Start_hourContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterStart_hour(this);
	}
};

Start_hourContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitStart_hour(this);
	}
};




presentable_policyParser.Start_hourContext = Start_hourContext;

presentable_policyParser.prototype.start_hour = function() {

    var localctx = new Start_hourContext(this, this._ctx, this.state);
    this.enterRule(localctx, 54, presentable_policyParser.RULE_start_hour);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 207;
        this.match(presentable_policyParser.INTEGER_NUMBER);
        this.state = 208;
        this.match(presentable_policyParser.T__0);
        this.state = 209;
        this.match(presentable_policyParser.INTEGER_NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};

function End_hourContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_end_hour;
    return this;
}

End_hourContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
End_hourContext.prototype.constructor = End_hourContext;

End_hourContext.prototype.INTEGER_NUMBER = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(presentable_policyParser.INTEGER_NUMBER);
    } else {
        return this.getToken(presentable_policyParser.INTEGER_NUMBER, i);
    }
};


End_hourContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterEnd_hour(this);
	}
};

End_hourContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitEnd_hour(this);
	}
};




presentable_policyParser.End_hourContext = End_hourContext;

presentable_policyParser.prototype.end_hour = function() {

    var localctx = new End_hourContext(this, this._ctx, this.state);
    this.enterRule(localctx, 56, presentable_policyParser.RULE_end_hour);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 211;
        this.match(presentable_policyParser.INTEGER_NUMBER);
        this.state = 212;
        this.match(presentable_policyParser.T__0);
        this.state = 213;
        this.match(presentable_policyParser.INTEGER_NUMBER);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


presentable_policyParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 2:
			return this.audience_clause_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

presentable_policyParser.prototype.audience_clause_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.presentable_policyParser = presentable_policyParser;
