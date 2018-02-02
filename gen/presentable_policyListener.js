// Generated from presentable_policy.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by presentable_policyParser.
function presentable_policyListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

presentable_policyListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
presentable_policyListener.prototype.constructor = presentable_policyListener;

// Enter a parse tree produced by presentable_policyParser#p.
presentable_policyListener.prototype.enterP = function(ctx) {
};

// Exit a parse tree produced by presentable_policyParser#p.
presentable_policyListener.prototype.exitP = function(ctx) {
};


// Enter a parse tree produced by presentable_policyParser#segment.
presentable_policyListener.prototype.enterSegment = function(ctx) {
};

// Exit a parse tree produced by presentable_policyParser#segment.
presentable_policyListener.prototype.exitSegment = function(ctx) {
};


// Enter a parse tree produced by presentable_policyParser#audience_clause.
presentable_policyListener.prototype.enterAudience_clause = function(ctx) {
};

// Exit a parse tree produced by presentable_policyParser#audience_clause.
presentable_policyListener.prototype.exitAudience_clause = function(ctx) {
};


// Enter a parse tree produced by presentable_policyParser#state_clause.
presentable_policyListener.prototype.enterState_clause = function(ctx) {
};

// Exit a parse tree produced by presentable_policyParser#state_clause.
presentable_policyListener.prototype.exitState_clause = function(ctx) {
};


// Enter a parse tree produced by presentable_policyParser#current_state_clause.
presentable_policyListener.prototype.enterCurrent_state_clause = function(ctx) {
};

// Exit a parse tree produced by presentable_policyParser#current_state_clause.
presentable_policyListener.prototype.exitCurrent_state_clause = function(ctx) {
};


// Enter a parse tree produced by presentable_policyParser#target_clause.
presentable_policyListener.prototype.enterTarget_clause = function(ctx) {
};

// Exit a parse tree produced by presentable_policyParser#target_clause.
presentable_policyListener.prototype.exitTarget_clause = function(ctx) {
};


// Enter a parse tree produced by presentable_policyParser#event.
presentable_policyListener.prototype.enterEvent = function(ctx) {
};

// Exit a parse tree produced by presentable_policyParser#event.
presentable_policyListener.prototype.exitEvent = function(ctx) {
};


// Enter a parse tree produced by presentable_policyParser#and_event.
presentable_policyListener.prototype.enterAnd_event = function(ctx) {
};

// Exit a parse tree produced by presentable_policyParser#and_event.
presentable_policyListener.prototype.exitAnd_event = function(ctx) {
};


// Enter a parse tree produced by presentable_policyParser#period_event.
presentable_policyListener.prototype.enterPeriod_event = function(ctx) {
};

// Exit a parse tree produced by presentable_policyParser#period_event.
presentable_policyListener.prototype.exitPeriod_event = function(ctx) {
};


// Enter a parse tree produced by presentable_policyParser#specific_date_event.
presentable_policyListener.prototype.enterSpecific_date_event = function(ctx) {
};

// Exit a parse tree produced by presentable_policyParser#specific_date_event.
presentable_policyListener.prototype.exitSpecific_date_event = function(ctx) {
};


// Enter a parse tree produced by presentable_policyParser#relative_date_event.
presentable_policyListener.prototype.enterRelative_date_event = function(ctx) {
};

// Exit a parse tree produced by presentable_policyParser#relative_date_event.
presentable_policyListener.prototype.exitRelative_date_event = function(ctx) {
};


// Enter a parse tree produced by presentable_policyParser#pricing_agreement_event.
presentable_policyListener.prototype.enterPricing_agreement_event = function(ctx) {
};

// Exit a parse tree produced by presentable_policyParser#pricing_agreement_event.
presentable_policyListener.prototype.exitPricing_agreement_event = function(ctx) {
};


// Enter a parse tree produced by presentable_policyParser#transaction_event.
presentable_policyListener.prototype.enterTransaction_event = function(ctx) {
};

// Exit a parse tree produced by presentable_policyParser#transaction_event.
presentable_policyListener.prototype.exitTransaction_event = function(ctx) {
};


// Enter a parse tree produced by presentable_policyParser#guaranty_event.
presentable_policyListener.prototype.enterGuaranty_event = function(ctx) {
};

// Exit a parse tree produced by presentable_policyParser#guaranty_event.
presentable_policyListener.prototype.exitGuaranty_event = function(ctx) {
};


// Enter a parse tree produced by presentable_policyParser#contract_guaranty.
presentable_policyListener.prototype.enterContract_guaranty = function(ctx) {
};

// Exit a parse tree produced by presentable_policyParser#contract_guaranty.
presentable_policyListener.prototype.exitContract_guaranty = function(ctx) {
};


// Enter a parse tree produced by presentable_policyParser#platform_guaranty.
presentable_policyListener.prototype.enterPlatform_guaranty = function(ctx) {
};

// Exit a parse tree produced by presentable_policyParser#platform_guaranty.
presentable_policyListener.prototype.exitPlatform_guaranty = function(ctx) {
};


// Enter a parse tree produced by presentable_policyParser#signing_event.
presentable_policyListener.prototype.enterSigning_event = function(ctx) {
};

// Exit a parse tree produced by presentable_policyParser#signing_event.
presentable_policyListener.prototype.exitSigning_event = function(ctx) {
};


// Enter a parse tree produced by presentable_policyParser#access_count_event.
presentable_policyListener.prototype.enterAccess_count_event = function(ctx) {
};

// Exit a parse tree produced by presentable_policyParser#access_count_event.
presentable_policyListener.prototype.exitAccess_count_event = function(ctx) {
};


// Enter a parse tree produced by presentable_policyParser#visit_increment_event.
presentable_policyListener.prototype.enterVisit_increment_event = function(ctx) {
};

// Exit a parse tree produced by presentable_policyParser#visit_increment_event.
presentable_policyListener.prototype.exitVisit_increment_event = function(ctx) {
};


// Enter a parse tree produced by presentable_policyParser#visit_event.
presentable_policyListener.prototype.enterVisit_event = function(ctx) {
};

// Exit a parse tree produced by presentable_policyParser#visit_event.
presentable_policyListener.prototype.exitVisit_event = function(ctx) {
};


// Enter a parse tree produced by presentable_policyParser#balance_event.
presentable_policyListener.prototype.enterBalance_event = function(ctx) {
};

// Exit a parse tree produced by presentable_policyParser#balance_event.
presentable_policyListener.prototype.exitBalance_event = function(ctx) {
};


// Enter a parse tree produced by presentable_policyParser#balance_greater.
presentable_policyListener.prototype.enterBalance_greater = function(ctx) {
};

// Exit a parse tree produced by presentable_policyParser#balance_greater.
presentable_policyListener.prototype.exitBalance_greater = function(ctx) {
};


// Enter a parse tree produced by presentable_policyParser#balance_smaller.
presentable_policyListener.prototype.enterBalance_smaller = function(ctx) {
};

// Exit a parse tree produced by presentable_policyParser#balance_smaller.
presentable_policyListener.prototype.exitBalance_smaller = function(ctx) {
};


// Enter a parse tree produced by presentable_policyParser#settlement_event.
presentable_policyListener.prototype.enterSettlement_event = function(ctx) {
};

// Exit a parse tree produced by presentable_policyParser#settlement_event.
presentable_policyListener.prototype.exitSettlement_event = function(ctx) {
};


// Enter a parse tree produced by presentable_policyParser#license_resource_id.
presentable_policyListener.prototype.enterLicense_resource_id = function(ctx) {
};

// Exit a parse tree produced by presentable_policyParser#license_resource_id.
presentable_policyListener.prototype.exitLicense_resource_id = function(ctx) {
};


// Enter a parse tree produced by presentable_policyParser#users.
presentable_policyListener.prototype.enterUsers = function(ctx) {
};

// Exit a parse tree produced by presentable_policyParser#users.
presentable_policyListener.prototype.exitUsers = function(ctx) {
};


// Enter a parse tree produced by presentable_policyParser#time_unit.
presentable_policyListener.prototype.enterTime_unit = function(ctx) {
};

// Exit a parse tree produced by presentable_policyParser#time_unit.
presentable_policyListener.prototype.exitTime_unit = function(ctx) {
};



exports.presentable_policyListener = presentable_policyListener;