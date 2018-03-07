// Generated from presentablePolicy.g4 by ANTLR 4.7.1
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by presentablePolicyParser.
function presentablePolicyListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

presentablePolicyListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
presentablePolicyListener.prototype.constructor = presentablePolicyListener;

// Enter a parse tree produced by presentablePolicyParser#policy.
presentablePolicyListener.prototype.enterPolicy = function(ctx) {
};

// Exit a parse tree produced by presentablePolicyParser#policy.
presentablePolicyListener.prototype.exitPolicy = function(ctx) {
};


// Enter a parse tree produced by presentablePolicyParser#segment.
presentablePolicyListener.prototype.enterSegment = function(ctx) {
};

// Exit a parse tree produced by presentablePolicyParser#segment.
presentablePolicyListener.prototype.exitSegment = function(ctx) {
};


// Enter a parse tree produced by presentablePolicyParser#audience_clause.
presentablePolicyListener.prototype.enterAudience_clause = function(ctx) {
};

// Exit a parse tree produced by presentablePolicyParser#audience_clause.
presentablePolicyListener.prototype.exitAudience_clause = function(ctx) {
};


// Enter a parse tree produced by presentablePolicyParser#state_clause.
presentablePolicyListener.prototype.enterState_clause = function(ctx) {
};

// Exit a parse tree produced by presentablePolicyParser#state_clause.
presentablePolicyListener.prototype.exitState_clause = function(ctx) {
};


// Enter a parse tree produced by presentablePolicyParser#initial_state_clause.
presentablePolicyListener.prototype.enterInitial_state_clause = function(ctx) {
};

// Exit a parse tree produced by presentablePolicyParser#initial_state_clause.
presentablePolicyListener.prototype.exitInitial_state_clause = function(ctx) {
};


// Enter a parse tree produced by presentablePolicyParser#current_state_clause.
presentablePolicyListener.prototype.enterCurrent_state_clause = function(ctx) {
};

// Exit a parse tree produced by presentablePolicyParser#current_state_clause.
presentablePolicyListener.prototype.exitCurrent_state_clause = function(ctx) {
};


// Enter a parse tree produced by presentablePolicyParser#target_clause.
presentablePolicyListener.prototype.enterTarget_clause = function(ctx) {
};

// Exit a parse tree produced by presentablePolicyParser#target_clause.
presentablePolicyListener.prototype.exitTarget_clause = function(ctx) {
};


// Enter a parse tree produced by presentablePolicyParser#event.
presentablePolicyListener.prototype.enterEvent = function(ctx) {
};

// Exit a parse tree produced by presentablePolicyParser#event.
presentablePolicyListener.prototype.exitEvent = function(ctx) {
};


// Enter a parse tree produced by presentablePolicyParser#and_event.
presentablePolicyListener.prototype.enterAnd_event = function(ctx) {
};

// Exit a parse tree produced by presentablePolicyParser#and_event.
presentablePolicyListener.prototype.exitAnd_event = function(ctx) {
};


// Enter a parse tree produced by presentablePolicyParser#period_event.
presentablePolicyListener.prototype.enterPeriod_event = function(ctx) {
};

// Exit a parse tree produced by presentablePolicyParser#period_event.
presentablePolicyListener.prototype.exitPeriod_event = function(ctx) {
};


// Enter a parse tree produced by presentablePolicyParser#specific_date_event.
presentablePolicyListener.prototype.enterSpecific_date_event = function(ctx) {
};

// Exit a parse tree produced by presentablePolicyParser#specific_date_event.
presentablePolicyListener.prototype.exitSpecific_date_event = function(ctx) {
};


// Enter a parse tree produced by presentablePolicyParser#relative_date_event.
presentablePolicyListener.prototype.enterRelative_date_event = function(ctx) {
};

// Exit a parse tree produced by presentablePolicyParser#relative_date_event.
presentablePolicyListener.prototype.exitRelative_date_event = function(ctx) {
};


// Enter a parse tree produced by presentablePolicyParser#pricing_agreement_event.
presentablePolicyListener.prototype.enterPricing_agreement_event = function(ctx) {
};

// Exit a parse tree produced by presentablePolicyParser#pricing_agreement_event.
presentablePolicyListener.prototype.exitPricing_agreement_event = function(ctx) {
};


// Enter a parse tree produced by presentablePolicyParser#transaction_event.
presentablePolicyListener.prototype.enterTransaction_event = function(ctx) {
};

// Exit a parse tree produced by presentablePolicyParser#transaction_event.
presentablePolicyListener.prototype.exitTransaction_event = function(ctx) {
};


// Enter a parse tree produced by presentablePolicyParser#guaranty_event.
presentablePolicyListener.prototype.enterGuaranty_event = function(ctx) {
};

// Exit a parse tree produced by presentablePolicyParser#guaranty_event.
presentablePolicyListener.prototype.exitGuaranty_event = function(ctx) {
};


// Enter a parse tree produced by presentablePolicyParser#contract_guaranty.
presentablePolicyListener.prototype.enterContract_guaranty = function(ctx) {
};

// Exit a parse tree produced by presentablePolicyParser#contract_guaranty.
presentablePolicyListener.prototype.exitContract_guaranty = function(ctx) {
};


// Enter a parse tree produced by presentablePolicyParser#platform_guaranty.
presentablePolicyListener.prototype.enterPlatform_guaranty = function(ctx) {
};

// Exit a parse tree produced by presentablePolicyParser#platform_guaranty.
presentablePolicyListener.prototype.exitPlatform_guaranty = function(ctx) {
};


// Enter a parse tree produced by presentablePolicyParser#signing_event.
presentablePolicyListener.prototype.enterSigning_event = function(ctx) {
};

// Exit a parse tree produced by presentablePolicyParser#signing_event.
presentablePolicyListener.prototype.exitSigning_event = function(ctx) {
};


// Enter a parse tree produced by presentablePolicyParser#access_count_event.
presentablePolicyListener.prototype.enterAccess_count_event = function(ctx) {
};

// Exit a parse tree produced by presentablePolicyParser#access_count_event.
presentablePolicyListener.prototype.exitAccess_count_event = function(ctx) {
};


// Enter a parse tree produced by presentablePolicyParser#visit_increment_event.
presentablePolicyListener.prototype.enterVisit_increment_event = function(ctx) {
};

// Exit a parse tree produced by presentablePolicyParser#visit_increment_event.
presentablePolicyListener.prototype.exitVisit_increment_event = function(ctx) {
};


// Enter a parse tree produced by presentablePolicyParser#visit_event.
presentablePolicyListener.prototype.enterVisit_event = function(ctx) {
};

// Exit a parse tree produced by presentablePolicyParser#visit_event.
presentablePolicyListener.prototype.exitVisit_event = function(ctx) {
};


// Enter a parse tree produced by presentablePolicyParser#balance_event.
presentablePolicyListener.prototype.enterBalance_event = function(ctx) {
};

// Exit a parse tree produced by presentablePolicyParser#balance_event.
presentablePolicyListener.prototype.exitBalance_event = function(ctx) {
};


// Enter a parse tree produced by presentablePolicyParser#balance_greater.
presentablePolicyListener.prototype.enterBalance_greater = function(ctx) {
};

// Exit a parse tree produced by presentablePolicyParser#balance_greater.
presentablePolicyListener.prototype.exitBalance_greater = function(ctx) {
};


// Enter a parse tree produced by presentablePolicyParser#balance_smaller.
presentablePolicyListener.prototype.enterBalance_smaller = function(ctx) {
};

// Exit a parse tree produced by presentablePolicyParser#balance_smaller.
presentablePolicyListener.prototype.exitBalance_smaller = function(ctx) {
};


// Enter a parse tree produced by presentablePolicyParser#settlement_event.
presentablePolicyListener.prototype.enterSettlement_event = function(ctx) {
};

// Exit a parse tree produced by presentablePolicyParser#settlement_event.
presentablePolicyListener.prototype.exitSettlement_event = function(ctx) {
};


// Enter a parse tree produced by presentablePolicyParser#license_resource_id.
presentablePolicyListener.prototype.enterLicense_resource_id = function(ctx) {
};

// Exit a parse tree produced by presentablePolicyParser#license_resource_id.
presentablePolicyListener.prototype.exitLicense_resource_id = function(ctx) {
};


// Enter a parse tree produced by presentablePolicyParser#users.
presentablePolicyListener.prototype.enterUsers = function(ctx) {
};

// Exit a parse tree produced by presentablePolicyParser#users.
presentablePolicyListener.prototype.exitUsers = function(ctx) {
};



exports.presentablePolicyListener = presentablePolicyListener;