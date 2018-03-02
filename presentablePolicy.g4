grammar presentablePolicy;

policy : (segment)* EOF
;
segment : FOR audience_clause+ ':' (state_clause)*
;
audience_clause
  :  users
  | audience_clause ','  audience_clause
  ;

state_clause
  : initial_state_clause target_clause+ (current_state_clause target_clause+)*
  ;

initial_state_clause
: 'in' ('initial' | '<initial>') ':'
;

current_state_clause
  : 'in' ID ':'
  ;
target_clause
  : 'proceed to' ID 'on' event (and_event)*
  | TERMINATE
  ;

event
  : period_event
  | specific_date_event
  | relative_date_event
  | pricing_agreement_event
  | transaction_event
  | guaranty_event
  | signing_event
  | access_count_event
  | balance_event
  | settlement_event
  ;

and_event
: 'and on' event
;

period_event
: 'end of' time_unit
;

specific_date_event
: 'arriving date' DATE HOUR //具体到秒？
;
relative_date_event
: INTEGER_NUMBER time_unit 'after contract creation'
;

pricing_agreement_event
: 'price priceExpression'
;

transaction_event
: 'receiving transaction of' INTEGER_NUMBER 'to' FEATHERACCOUNT //默认是每种币的最小单位
;

guaranty_event
: contract_guaranty
| platform_guaranty
;

contract_guaranty
: 'contract_guaranty of' INTEGER_NUMBER 'refund after' INTEGER_NUMBER 'day'
;

platform_guaranty
: 'platform_guaranty of' INTEGER_NUMBER
;

signing_event
: 'accepting license' license_resource_id (',' license_resource_id)*
;

access_count_event
: visit_increment_event
| visit_event
;

visit_increment_event
: 'visit_increment of' INTEGER_NUMBER
;

visit_event
: 'visit of' INTEGER_NUMBER
;

balance_event
: balance_greater
| balance_smaller
;

balance_greater
: 'account_balance greater than' INTEGER_NUMBER  //针对某种账户？
;

balance_smaller
: 'account_balance smaller than' INTEGER_NUMBER   //针对某种账户？
;

settlement_event
: 'account_settled'
;

license_resource_id : ALPHANUMERIC;
users : SELF | GROUPUSER | REGISTERED_USERS | PUBLIC | MOBILEPHONE | EMAIL;

time_unit : ('year' | 'week' | 'day'| 'cycle') 's'?;

FOR: F O R;
SELF : S E L F;
GROUPUSER :  G R O U P '_' U S E R '_' ID*;
REGISTERED_USERS : R E G I S T E R E D '_' U S E R S;
PUBLIC : P U B L I C;
TERMINATE : T E R M I N A T E;
fragment CHAR : . ;
fragment A : ('A'|'a');
fragment B : ('B'|'b');
fragment C : ('C'|'c');
fragment D : ('D'|'d');
fragment E : ('E'|'e');
fragment F : ('F'|'f');
fragment G : ('G'|'g');
fragment H : ('H'|'h');
fragment I : ('I'|'i');
fragment J : ('J'|'j');
fragment K : ('K'|'k');
fragment L : ('L'|'l');
fragment M : ('M'|'m');
fragment N : ('N'|'n');
fragment O : ('O'|'o');
fragment P : ('P'|'p');
fragment Q : ('Q'|'q');
fragment R : ('R'|'r');
fragment S : ('S'|'s');
fragment T : ('T'|'t');
fragment U : ('U'|'u');
fragment V : ('V'|'v');
fragment W : ('W'|'w');
fragment X : ('X'|'x');
fragment Y : ('Y'|'y');
fragment Z : ('Z'|'z');

fragment DIGIT : [0-9] ;
fragment LOWERCASE : [a-z];
fragment UPPERCASE : [A-Z];
fragment ALPHA : [a-zA-Z];

ID  : [<>a-zA-Z_]+;

MOBILEPHONE: '1' [34578] NIGHT_DIGITS;
EMAIL :  (ALPHA | '.' | DIGIT)+  '@' (ALPHA | '.' | DIGIT)+;
FEATHERACCOUNT : 'f' ALPHANUMERIC;

TWO_DIGITS
  : DIGIT DIGIT
  ;

HOUR
  : TWO_DIGITS ':' TWO_DIGITS (':' TWO_DIGITS)?
  ;
INTEGER_NUMBER:  DIGIT+;

DATE : FOUR_DIGITS '-' INTEGER_NUMBER '-' INTEGER_NUMBER;

ALPHANUMERIC : (ALPHA | DIGIT)+;

NIGHT_DIGITS:
 DIGIT DIGIT DIGIT DIGIT DIGIT DIGIT DIGIT DIGIT DIGIT;

FOUR_DIGITS
  : DIGIT DIGIT DIGIT DIGIT
  ;
WS  : [ \t\r\n]+ -> skip;