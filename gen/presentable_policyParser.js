// Generated from presentable_policy.g4 by ANTLR 4.7
// jshint ignore: start
var antlr4 = require('antlr4/index');
var presentable_policyListener = require('./presentable_policyListener').presentable_policyListener;
var grammarFileName = "presentable_policy.g4";

var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u00030\u011a\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010\t\u0010\u0004",
    "\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013\u0004\u0014\t",
    "\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017\t\u0017\u0004",
    "\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a\u0004\u001b\t",
    "\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e\t\u001e\u0004",
    "\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#\t#\u0004$\t$\u0004",
    "%\t%\u0004&\t&\u0003\u0002\u0006\u0002N\n\u0002\r\u0002\u000e\u0002",
    "O\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0006\u0003V\n\u0003",
    "\r\u0003\u000e\u0003W\u0003\u0003\u0003\u0003\u0007\u0003\\\n\u0003",
    "\f\u0003\u000e\u0003_\u000b\u0003\u0003\u0003\u0003\u0003\u0003\u0004",
    "\u0003\u0004\u0003\u0004\u0005\u0004f\n\u0004\u0003\u0004\u0003\u0004",
    "\u0003\u0004\u0005\u0004k\n\u0004\u0005\u0004m\n\u0004\u0003\u0005\u0003",
    "\u0005\u0007\u0005q\n\u0005\f\u0005\u000e\u0005t\u000b\u0005\u0003\u0005",
    "\u0007\u0005w\n\u0005\f\u0005\u000e\u0005z\u000b\u0005\u0003\u0006\u0003",
    "\u0006\u0003\u0006\u0007\u0006\u007f\n\u0006\f\u0006\u000e\u0006\u0082",
    "\u000b\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0007\u0007",
    "\u0088\n\u0007\f\u0007\u000e\u0007\u008b\u000b\u0007\u0003\b\u0003\b",
    "\u0006\b\u008f\n\b\r\b\u000e\b\u0090\u0003\t\u0003\t\u0003\t\u0003\t",
    "\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0007\n\u009c\n\n\f\n\u000e",
    "\n\u009f\u000b\n\u0003\n\u0003\n\u0007\n\u00a3\n\n\f\n\u000e\n\u00a6",
    "\u000b\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0003\f\u0003\f\u0005\f\u00b4\n\f\u0003\r",
    "\u0003\r\u0003\r\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003",
    "\u000f\u0003\u000f\u0003\u0010\u0003\u0010\u0003\u0010\u0003\u0010\u0003",
    "\u0011\u0003\u0011\u0003\u0012\u0003\u0012\u0003\u0012\u0003\u0012\u0003",
    "\u0013\u0003\u0013\u0005\u0013\u00cb\n\u0013\u0003\u0014\u0003\u0014",
    "\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015",
    "\u0003\u0015\u0003\u0016\u0003\u0016\u0007\u0016\u00d8\n\u0016\f\u0016",
    "\u000e\u0016\u00db\u000b\u0016\u0003\u0016\u0006\u0016\u00de\n\u0016",
    "\r\u0016\u000e\u0016\u00df\u0003\u0017\u0003\u0017\u0005\u0017\u00e4",
    "\n\u0017\u0003\u0018\u0003\u0018\u0003\u0018\u0003\u0019\u0003\u0019",
    "\u0003\u0019\u0003\u001a\u0003\u001a\u0005\u001a\u00ee\n\u001a\u0003",
    "\u001b\u0003\u001b\u0003\u001b\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001d\u0003\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0003\u001f\u0003",
    " \u0003 \u0003 \u0007 \u00ff\n \f \u000e \u0102\u000b \u0003!\u0003",
    "!\u0003!\u0007!\u0107\n!\f!\u000e!\u010a\u000b!\u0003\"\u0003\"\u0003",
    "#\u0003#\u0003$\u0003$\u0003%\u0003%\u0003%\u0003%\u0003&\u0003&\u0003",
    "&\u0003&\u0003&\u0002\u0002\'\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012",
    "\u0014\u0016\u0018\u001a\u001c\u001e \"$&(*,.02468:<>@BDFHJ\u0002\u0004",
    "\u0003\u0002\u0019\u001a\u0004\u0002\u0012\u0012\u001b\u001d\u0002\u0111",
    "\u0002M\u0003\u0002\u0002\u0002\u0004S\u0003\u0002\u0002\u0002\u0006",
    "l\u0003\u0002\u0002\u0002\bn\u0003\u0002\u0002\u0002\n{\u0003\u0002",
    "\u0002\u0002\f\u0083\u0003\u0002\u0002\u0002\u000e\u008c\u0003\u0002",
    "\u0002\u0002\u0010\u0092\u0003\u0002\u0002\u0002\u0012\u0096\u0003\u0002",
    "\u0002\u0002\u0014\u00a7\u0003\u0002\u0002\u0002\u0016\u00b3\u0003\u0002",
    "\u0002\u0002\u0018\u00b5\u0003\u0002\u0002\u0002\u001a\u00b8\u0003\u0002",
    "\u0002\u0002\u001c\u00bb\u0003\u0002\u0002\u0002\u001e\u00be\u0003\u0002",
    "\u0002\u0002 \u00c2\u0003\u0002\u0002\u0002\"\u00c4\u0003\u0002\u0002",
    "\u0002$\u00ca\u0003\u0002\u0002\u0002&\u00cc\u0003\u0002\u0002\u0002",
    "(\u00d2\u0003\u0002\u0002\u0002*\u00d5\u0003\u0002\u0002\u0002,\u00e3",
    "\u0003\u0002\u0002\u0002.\u00e5\u0003\u0002\u0002\u00020\u00e8\u0003",
    "\u0002\u0002\u00022\u00ed\u0003\u0002\u0002\u00024\u00ef\u0003\u0002",
    "\u0002\u00026\u00f2\u0003\u0002\u0002\u00028\u00f5\u0003\u0002\u0002",
    "\u0002:\u00f7\u0003\u0002\u0002\u0002<\u00f9\u0003\u0002\u0002\u0002",
    ">\u00fb\u0003\u0002\u0002\u0002@\u0103\u0003\u0002\u0002\u0002B\u010b",
    "\u0003\u0002\u0002\u0002D\u010d\u0003\u0002\u0002\u0002F\u010f\u0003",
    "\u0002\u0002\u0002H\u0111\u0003\u0002\u0002\u0002J\u0115\u0003\u0002",
    "\u0002\u0002LN\u0005\u0004\u0003\u0002ML\u0003\u0002\u0002\u0002NO\u0003",
    "\u0002\u0002\u0002OM\u0003\u0002\u0002\u0002OP\u0003\u0002\u0002\u0002",
    "PQ\u0003\u0002\u0002\u0002QR\u0007\u0002\u0002\u0003R\u0003\u0003\u0002",
    "\u0002\u0002SU\u0007\u001e\u0002\u0002TV\u0005\u0006\u0004\u0002UT\u0003",
    "\u0002\u0002\u0002VW\u0003\u0002\u0002\u0002WU\u0003\u0002\u0002\u0002",
    "WX\u0003\u0002\u0002\u0002XY\u0003\u0002\u0002\u0002Y]\u0007\u0003\u0002",
    "\u0002Z\\\u0005\u000e\b\u0002[Z\u0003\u0002\u0002\u0002\\_\u0003\u0002",
    "\u0002\u0002][\u0003\u0002\u0002\u0002]^\u0003\u0002\u0002\u0002^`\u0003",
    "\u0002\u0002\u0002_]\u0003\u0002\u0002\u0002`a\u0005\b\u0005\u0002a",
    "\u0005\u0003\u0002\u0002\u0002be\u0005\n\u0006\u0002cd\u0007\u0004\u0002",
    "\u0002df\u0005\f\u0007\u0002ec\u0003\u0002\u0002\u0002ef\u0003\u0002",
    "\u0002\u0002fm\u0003\u0002\u0002\u0002gj\u0005\f\u0007\u0002hi\u0007",
    "\u0004\u0002\u0002ik\u0005\n\u0006\u0002jh\u0003\u0002\u0002\u0002j",
    "k\u0003\u0002\u0002\u0002km\u0003\u0002\u0002\u0002lb\u0003\u0002\u0002",
    "\u0002lg\u0003\u0002\u0002\u0002m\u0007\u0003\u0002\u0002\u0002nx\u0007",
    "\u0005\u0002\u0002oq\u0007\u0006\u0002\u0002po\u0003\u0002\u0002\u0002",
    "qt\u0003\u0002\u0002\u0002rp\u0003\u0002\u0002\u0002rs\u0003\u0002\u0002",
    "\u0002su\u0003\u0002\u0002\u0002tr\u0003\u0002\u0002\u0002uw\u0007-",
    "\u0002\u0002vr\u0003\u0002\u0002\u0002wz\u0003\u0002\u0002\u0002xv\u0003",
    "\u0002\u0002\u0002xy\u0003\u0002\u0002\u0002y\t\u0003\u0002\u0002\u0002",
    "zx\u0003\u0002\u0002\u0002{\u0080\u0005> \u0002|}\u0007\u0006\u0002",
    "\u0002}\u007f\u0005> \u0002~|\u0003\u0002\u0002\u0002\u007f\u0082\u0003",
    "\u0002\u0002\u0002\u0080~\u0003\u0002\u0002\u0002\u0080\u0081\u0003",
    "\u0002\u0002\u0002\u0081\u000b\u0003\u0002\u0002\u0002\u0082\u0080\u0003",
    "\u0002\u0002\u0002\u0083\u0084\u0007\u0007\u0002\u0002\u0084\u0089\u0005",
    "@!\u0002\u0085\u0086\u0007\u0006\u0002\u0002\u0086\u0088\u0005@!\u0002",
    "\u0087\u0085\u0003\u0002\u0002\u0002\u0088\u008b\u0003\u0002\u0002\u0002",
    "\u0089\u0087\u0003\u0002\u0002\u0002\u0089\u008a\u0003\u0002\u0002\u0002",
    "\u008a\r\u0003\u0002\u0002\u0002\u008b\u0089\u0003\u0002\u0002\u0002",
    "\u008c\u008e\u0005\u0010\t\u0002\u008d\u008f\u0005\u0012\n\u0002\u008e",
    "\u008d\u0003\u0002\u0002\u0002\u008f\u0090\u0003\u0002\u0002\u0002\u0090",
    "\u008e\u0003\u0002\u0002\u0002\u0090\u0091\u0003\u0002\u0002\u0002\u0091",
    "\u000f\u0003\u0002\u0002\u0002\u0092\u0093\u0007#\u0002\u0002\u0093",
    "\u0094\u0007-\u0002\u0002\u0094\u0095\u0007\b\u0002\u0002\u0095\u0011",
    "\u0003\u0002\u0002\u0002\u0096\u0097\u0007!\u0002\u0002\u0097\u0098",
    "\u0007\"\u0002\u0002\u0098\u0099\u0007-\u0002\u0002\u0099\u009d\u0007",
    "$\u0002\u0002\u009a\u009c\u0005\u0014\u000b\u0002\u009b\u009a\u0003",
    "\u0002\u0002\u0002\u009c\u009f\u0003\u0002\u0002\u0002\u009d\u009b\u0003",
    "\u0002\u0002\u0002\u009d\u009e\u0003\u0002\u0002\u0002\u009e\u00a0\u0003",
    "\u0002\u0002\u0002\u009f\u009d\u0003\u0002\u0002\u0002\u00a0\u00a4\u0005",
    "\u0016\f\u0002\u00a1\u00a3\u0005\u0018\r\u0002\u00a2\u00a1\u0003\u0002",
    "\u0002\u0002\u00a3\u00a6\u0003\u0002\u0002\u0002\u00a4\u00a2\u0003\u0002",
    "\u0002\u0002\u00a4\u00a5\u0003\u0002\u0002\u0002\u00a5\u0013\u0003\u0002",
    "\u0002\u0002\u00a6\u00a4\u0003\u0002\u0002\u0002\u00a7\u00a8\u0007%",
    "\u0002\u0002\u00a8\u0015\u0003\u0002\u0002\u0002\u00a9\u00b4\u0005\u001a",
    "\u000e\u0002\u00aa\u00b4\u0005\u001c\u000f\u0002\u00ab\u00b4\u0005\u001e",
    "\u0010\u0002\u00ac\u00b4\u0005 \u0011\u0002\u00ad\u00b4\u0005\"\u0012",
    "\u0002\u00ae\u00b4\u0005$\u0013\u0002\u00af\u00b4\u0005*\u0016\u0002",
    "\u00b0\u00b4\u0005,\u0017\u0002\u00b1\u00b4\u00052\u001a\u0002\u00b2",
    "\u00b4\u00058\u001d\u0002\u00b3\u00a9\u0003\u0002\u0002\u0002\u00b3",
    "\u00aa\u0003\u0002\u0002\u0002\u00b3\u00ab\u0003\u0002\u0002\u0002\u00b3",
    "\u00ac\u0003\u0002\u0002\u0002\u00b3\u00ad\u0003\u0002\u0002\u0002\u00b3",
    "\u00ae\u0003\u0002\u0002\u0002\u00b3\u00af\u0003\u0002\u0002\u0002\u00b3",
    "\u00b0\u0003\u0002\u0002\u0002\u00b3\u00b1\u0003\u0002\u0002\u0002\u00b3",
    "\u00b2\u0003\u0002\u0002\u0002\u00b4\u0017\u0003\u0002\u0002\u0002\u00b5",
    "\u00b6\u0007\t\u0002\u0002\u00b6\u00b7\u0005\u0016\f\u0002\u00b7\u0019",
    "\u0003\u0002\u0002\u0002\u00b8\u00b9\u0007\n\u0002\u0002\u00b9\u00ba",
    "\u0005F$\u0002\u00ba\u001b\u0003\u0002\u0002\u0002\u00bb\u00bc\u0007",
    "\u000b\u0002\u0002\u00bc\u00bd\u00070\u0002\u0002\u00bd\u001d\u0003",
    "\u0002\u0002\u0002\u00be\u00bf\u0007/\u0002\u0002\u00bf\u00c0\u0005",
    "F$\u0002\u00c0\u00c1\u0007\f\u0002\u0002\u00c1\u001f\u0003\u0002\u0002",
    "\u0002\u00c2\u00c3\u0007\r\u0002\u0002\u00c3!\u0003\u0002\u0002\u0002",
    "\u00c4\u00c5\u0007\u000e\u0002\u0002\u00c5\u00c6\u0007/\u0002\u0002",
    "\u00c6\u00c7\u0007\u000f\u0002\u0002\u00c7#\u0003\u0002\u0002\u0002",
    "\u00c8\u00cb\u0005&\u0014\u0002\u00c9\u00cb\u0005(\u0015\u0002\u00ca",
    "\u00c8\u0003\u0002\u0002\u0002\u00ca\u00c9\u0003\u0002\u0002\u0002\u00cb",
    "%\u0003\u0002\u0002\u0002\u00cc\u00cd\u0007\u0010\u0002\u0002\u00cd",
    "\u00ce\u0007/\u0002\u0002\u00ce\u00cf\u0007\u0011\u0002\u0002\u00cf",
    "\u00d0\u0007/\u0002\u0002\u00d0\u00d1\u0007\u0012\u0002\u0002\u00d1",
    "\'\u0003\u0002\u0002\u0002\u00d2\u00d3\u0007\u0013\u0002\u0002\u00d3",
    "\u00d4\u0007/\u0002\u0002\u00d4)\u0003\u0002\u0002\u0002\u00d5\u00dd",
    "\u0007\'\u0002\u0002\u00d6\u00d8\u0007\u0006\u0002\u0002\u00d7\u00d6",
    "\u0003\u0002\u0002\u0002\u00d8\u00db\u0003\u0002\u0002\u0002\u00d9\u00d7",
    "\u0003\u0002\u0002\u0002\u00d9\u00da\u0003\u0002\u0002\u0002\u00da\u00dc",
    "\u0003\u0002\u0002\u0002\u00db\u00d9\u0003\u0002\u0002\u0002\u00dc\u00de",
    "\u0005:\u001e\u0002\u00dd\u00d9\u0003\u0002\u0002\u0002\u00de\u00df",
    "\u0003\u0002\u0002\u0002\u00df\u00dd\u0003\u0002\u0002\u0002\u00df\u00e0",
    "\u0003\u0002\u0002\u0002\u00e0+\u0003\u0002\u0002\u0002\u00e1\u00e4",
    "\u0005.\u0018\u0002\u00e2\u00e4\u00050\u0019\u0002\u00e3\u00e1\u0003",
    "\u0002\u0002\u0002\u00e3\u00e2\u0003\u0002\u0002\u0002\u00e4-\u0003",
    "\u0002\u0002\u0002\u00e5\u00e6\u0007\u0014\u0002\u0002\u00e6\u00e7\u0007",
    "/\u0002\u0002\u00e7/\u0003\u0002\u0002\u0002\u00e8\u00e9\u0007\u0015",
    "\u0002\u0002\u00e9\u00ea\u0007/\u0002\u0002\u00ea1\u0003\u0002\u0002",
    "\u0002\u00eb\u00ee\u00054\u001b\u0002\u00ec\u00ee\u00056\u001c\u0002",
    "\u00ed\u00eb\u0003\u0002\u0002\u0002\u00ed\u00ec\u0003\u0002\u0002\u0002",
    "\u00ee3\u0003\u0002\u0002\u0002\u00ef\u00f0\u0007\u0016\u0002\u0002",
    "\u00f0\u00f1\u0007/\u0002\u0002\u00f15\u0003\u0002\u0002\u0002\u00f2",
    "\u00f3\u0007\u0017\u0002\u0002\u00f3\u00f4\u0007/\u0002\u0002\u00f4",
    "7\u0003\u0002\u0002\u0002\u00f5\u00f6\u0007\u0018\u0002\u0002\u00f6",
    "9\u0003\u0002\u0002\u0002\u00f7\u00f8\u0007-\u0002\u0002\u00f8;\u0003",
    "\u0002\u0002\u0002\u00f9\u00fa\u0007-\u0002\u0002\u00fa=\u0003\u0002",
    "\u0002\u0002\u00fb\u0100\u0007-\u0002\u0002\u00fc\u00fd\u0007\u0006",
    "\u0002\u0002\u00fd\u00ff\u0007-\u0002\u0002\u00fe\u00fc\u0003\u0002",
    "\u0002\u0002\u00ff\u0102\u0003\u0002\u0002\u0002\u0100\u00fe\u0003\u0002",
    "\u0002\u0002\u0100\u0101\u0003\u0002\u0002\u0002\u0101?\u0003\u0002",
    "\u0002\u0002\u0102\u0100\u0003\u0002\u0002\u0002\u0103\u0108\u0007-",
    "\u0002\u0002\u0104\u0105\u0007\u0006\u0002\u0002\u0105\u0107\u0007-",
    "\u0002\u0002\u0106\u0104\u0003\u0002\u0002\u0002\u0107\u010a\u0003\u0002",
    "\u0002\u0002\u0108\u0106\u0003\u0002\u0002\u0002\u0108\u0109\u0003\u0002",
    "\u0002\u0002\u0109A\u0003\u0002\u0002\u0002\u010a\u0108\u0003\u0002",
    "\u0002\u0002\u010b\u010c\u0007\u0004\u0002\u0002\u010cC\u0003\u0002",
    "\u0002\u0002\u010d\u010e\t\u0002\u0002\u0002\u010eE\u0003\u0002\u0002",
    "\u0002\u010f\u0110\t\u0003\u0002\u0002\u0110G\u0003\u0002\u0002\u0002",
    "\u0111\u0112\u0007/\u0002\u0002\u0112\u0113\u0007\b\u0002\u0002\u0113",
    "\u0114\u0007/\u0002\u0002\u0114I\u0003\u0002\u0002\u0002\u0115\u0116",
    "\u0007/\u0002\u0002\u0116\u0117\u0007\b\u0002\u0002\u0117\u0118\u0007",
    "/\u0002\u0002\u0118K\u0003\u0002\u0002\u0002\u0017OW]ejlrx\u0080\u0089",
    "\u0090\u009d\u00a4\u00b3\u00ca\u00d9\u00df\u00e3\u00ed\u0100\u0108"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'in the following states:'", "'and'", "'I agree to authorize token in'", 
                     "','", "'users in'", "':'", "'and on'", "'the end of'", 
                     "'date'", "'after contract creation'", "'price priceExpression'", 
                     "'transaction of'", "'to owner'", "'contract_guaranty of'", 
                     "'refund after'", "'day'", "'platform_guaranty of'", 
                     "'visit_increment of'", "'visit of'", "'account_balance greater than'", 
                     "'account_balance smaller than'", "'account_settled'", 
                     "'in total'", "'per view'", "'year'", "'week'", "'cycle'", 
                     "'For'", "'usergroups'", "'users'", "'proceed'", "'to'", 
                     "'in'", "'on'", "'accepting'", null, "'license'", "'paying'", 
                     "'per'", "'view'", "'require'", "'nothing'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, "FOR", "USERGROUPS", "USERS", "PROCEED", "TO", 
                      "IN", "ON", "ACCEPTING", "SELF", "LICENSE", "PAYING", 
                      "PER", "VIEW", "REQUIRE", "NOTHING", "ID", "WS", "INT", 
                      "DATE" ];

var ruleNames =  [ "p", "segment", "audience_clause", "athorize_token_clause", 
                   "audience_individuals_clause", "audience_groups_clause", 
                   "state_clause", "current_state_clause", "target_clause", 
                   "accepting", "event", "and_event", "period_event", "specific_date_event", 
                   "relative_date_event", "pricing_agreement_event", "transaction_event", 
                   "guaranty_event", "contract_guaranty", "platform_guaranty", 
                   "signing_event", "access_count_event", "visit_increment_event", 
                   "visit_event", "balance_event", "balance_greater", "balance_smaller", 
                   "settlement_event", "license_resource_id", "account_id", 
                   "users", "user_groups", "and", "view_unit", "time_unit", 
                   "start_hour", "end_hour" ];

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
presentable_policyParser.T__26 = 27;
presentable_policyParser.FOR = 28;
presentable_policyParser.USERGROUPS = 29;
presentable_policyParser.USERS = 30;
presentable_policyParser.PROCEED = 31;
presentable_policyParser.TO = 32;
presentable_policyParser.IN = 33;
presentable_policyParser.ON = 34;
presentable_policyParser.ACCEPTING = 35;
presentable_policyParser.SELF = 36;
presentable_policyParser.LICENSE = 37;
presentable_policyParser.PAYING = 38;
presentable_policyParser.PER = 39;
presentable_policyParser.VIEW = 40;
presentable_policyParser.REQUIRE = 41;
presentable_policyParser.NOTHING = 42;
presentable_policyParser.ID = 43;
presentable_policyParser.WS = 44;
presentable_policyParser.INT = 45;
presentable_policyParser.DATE = 46;

presentable_policyParser.RULE_p = 0;
presentable_policyParser.RULE_segment = 1;
presentable_policyParser.RULE_audience_clause = 2;
presentable_policyParser.RULE_athorize_token_clause = 3;
presentable_policyParser.RULE_audience_individuals_clause = 4;
presentable_policyParser.RULE_audience_groups_clause = 5;
presentable_policyParser.RULE_state_clause = 6;
presentable_policyParser.RULE_current_state_clause = 7;
presentable_policyParser.RULE_target_clause = 8;
presentable_policyParser.RULE_accepting = 9;
presentable_policyParser.RULE_event = 10;
presentable_policyParser.RULE_and_event = 11;
presentable_policyParser.RULE_period_event = 12;
presentable_policyParser.RULE_specific_date_event = 13;
presentable_policyParser.RULE_relative_date_event = 14;
presentable_policyParser.RULE_pricing_agreement_event = 15;
presentable_policyParser.RULE_transaction_event = 16;
presentable_policyParser.RULE_guaranty_event = 17;
presentable_policyParser.RULE_contract_guaranty = 18;
presentable_policyParser.RULE_platform_guaranty = 19;
presentable_policyParser.RULE_signing_event = 20;
presentable_policyParser.RULE_access_count_event = 21;
presentable_policyParser.RULE_visit_increment_event = 22;
presentable_policyParser.RULE_visit_event = 23;
presentable_policyParser.RULE_balance_event = 24;
presentable_policyParser.RULE_balance_greater = 25;
presentable_policyParser.RULE_balance_smaller = 26;
presentable_policyParser.RULE_settlement_event = 27;
presentable_policyParser.RULE_license_resource_id = 28;
presentable_policyParser.RULE_account_id = 29;
presentable_policyParser.RULE_users = 30;
presentable_policyParser.RULE_user_groups = 31;
presentable_policyParser.RULE_and = 32;
presentable_policyParser.RULE_view_unit = 33;
presentable_policyParser.RULE_time_unit = 34;
presentable_policyParser.RULE_start_hour = 35;
presentable_policyParser.RULE_end_hour = 36;

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
        this.state = 75; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 74;
            this.segment();
            this.state = 77; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===presentable_policyParser.FOR);
        this.state = 79;
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

SegmentContext.prototype.athorize_token_clause = function() {
    return this.getTypedRuleContext(Athorize_token_clauseContext,0);
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
        this.state = 81;
        this.match(presentable_policyParser.FOR);
        this.state = 83; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 82;
            this.audience_clause();
            this.state = 85; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===presentable_policyParser.T__4 || _la===presentable_policyParser.ID);
        this.state = 87;
        this.match(presentable_policyParser.T__0);
        this.state = 91;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===presentable_policyParser.IN) {
            this.state = 88;
            this.state_clause();
            this.state = 93;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 94;
        this.athorize_token_clause();
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

Audience_clauseContext.prototype.audience_individuals_clause = function() {
    return this.getTypedRuleContext(Audience_individuals_clauseContext,0);
};

Audience_clauseContext.prototype.audience_groups_clause = function() {
    return this.getTypedRuleContext(Audience_groups_clauseContext,0);
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




presentable_policyParser.Audience_clauseContext = Audience_clauseContext;

presentable_policyParser.prototype.audience_clause = function() {

    var localctx = new Audience_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 4, presentable_policyParser.RULE_audience_clause);
    var _la = 0; // Token type
    try {
        this.state = 106;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case presentable_policyParser.ID:
            this.enterOuterAlt(localctx, 1);
            this.state = 96;
            this.audience_individuals_clause();
            this.state = 99;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===presentable_policyParser.T__1) {
                this.state = 97;
                this.match(presentable_policyParser.T__1);
                this.state = 98;
                this.audience_groups_clause();
            }

            break;
        case presentable_policyParser.T__4:
            this.enterOuterAlt(localctx, 2);
            this.state = 101;
            this.audience_groups_clause();
            this.state = 104;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if(_la===presentable_policyParser.T__1) {
                this.state = 102;
                this.match(presentable_policyParser.T__1);
                this.state = 103;
                this.audience_individuals_clause();
            }

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

function Athorize_token_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_athorize_token_clause;
    return this;
}

Athorize_token_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Athorize_token_clauseContext.prototype.constructor = Athorize_token_clauseContext;

Athorize_token_clauseContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(presentable_policyParser.ID);
    } else {
        return this.getToken(presentable_policyParser.ID, i);
    }
};


Athorize_token_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterAthorize_token_clause(this);
	}
};

Athorize_token_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitAthorize_token_clause(this);
	}
};




presentable_policyParser.Athorize_token_clauseContext = Athorize_token_clauseContext;

presentable_policyParser.prototype.athorize_token_clause = function() {

    var localctx = new Athorize_token_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, presentable_policyParser.RULE_athorize_token_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 108;
        this.match(presentable_policyParser.T__2);
        this.state = 118;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===presentable_policyParser.T__3 || _la===presentable_policyParser.ID) {
            this.state = 112;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===presentable_policyParser.T__3) {
                this.state = 109;
                this.match(presentable_policyParser.T__3);
                this.state = 114;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 115;
            this.match(presentable_policyParser.ID);
            this.state = 120;
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

function Audience_individuals_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_audience_individuals_clause;
    return this;
}

Audience_individuals_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Audience_individuals_clauseContext.prototype.constructor = Audience_individuals_clauseContext;

Audience_individuals_clauseContext.prototype.users = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(UsersContext);
    } else {
        return this.getTypedRuleContext(UsersContext,i);
    }
};

Audience_individuals_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterAudience_individuals_clause(this);
	}
};

Audience_individuals_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitAudience_individuals_clause(this);
	}
};




presentable_policyParser.Audience_individuals_clauseContext = Audience_individuals_clauseContext;

presentable_policyParser.prototype.audience_individuals_clause = function() {

    var localctx = new Audience_individuals_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, presentable_policyParser.RULE_audience_individuals_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 121;
        this.users();
        this.state = 126;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===presentable_policyParser.T__3) {
            this.state = 122;
            this.match(presentable_policyParser.T__3);
            this.state = 123;
            this.users();
            this.state = 128;
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

function Audience_groups_clauseContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_audience_groups_clause;
    return this;
}

Audience_groups_clauseContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Audience_groups_clauseContext.prototype.constructor = Audience_groups_clauseContext;

Audience_groups_clauseContext.prototype.user_groups = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(User_groupsContext);
    } else {
        return this.getTypedRuleContext(User_groupsContext,i);
    }
};

Audience_groups_clauseContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterAudience_groups_clause(this);
	}
};

Audience_groups_clauseContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitAudience_groups_clause(this);
	}
};




presentable_policyParser.Audience_groups_clauseContext = Audience_groups_clauseContext;

presentable_policyParser.prototype.audience_groups_clause = function() {

    var localctx = new Audience_groups_clauseContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, presentable_policyParser.RULE_audience_groups_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        this.match(presentable_policyParser.T__4);
        this.state = 130;
        this.user_groups();
        this.state = 135;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===presentable_policyParser.T__3) {
            this.state = 131;
            this.match(presentable_policyParser.T__3);
            this.state = 132;
            this.user_groups();
            this.state = 137;
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
    this.enterRule(localctx, 12, presentable_policyParser.RULE_state_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 138;
        this.current_state_clause();
        this.state = 140; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 139;
            this.target_clause();
            this.state = 142; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===presentable_policyParser.PROCEED);
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

Current_state_clauseContext.prototype.IN = function() {
    return this.getToken(presentable_policyParser.IN, 0);
};

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
    this.enterRule(localctx, 14, presentable_policyParser.RULE_current_state_clause);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 144;
        this.match(presentable_policyParser.IN);
        this.state = 145;
        this.match(presentable_policyParser.ID);
        this.state = 146;
        this.match(presentable_policyParser.T__5);
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

Target_clauseContext.prototype.PROCEED = function() {
    return this.getToken(presentable_policyParser.PROCEED, 0);
};

Target_clauseContext.prototype.TO = function() {
    return this.getToken(presentable_policyParser.TO, 0);
};

Target_clauseContext.prototype.ID = function() {
    return this.getToken(presentable_policyParser.ID, 0);
};

Target_clauseContext.prototype.event = function() {
    return this.getTypedRuleContext(EventContext,0);
};

Target_clauseContext.prototype.accepting = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(AcceptingContext);
    } else {
        return this.getTypedRuleContext(AcceptingContext,i);
    }
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
    this.enterRule(localctx, 16, presentable_policyParser.RULE_target_clause);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 148;
        this.match(presentable_policyParser.PROCEED);
        this.state = 149;
        this.match(presentable_policyParser.TO);
        this.state = 150;
        this.match(presentable_policyParser.ID);
        this.state = 151;
        this.match(presentable_policyParser.ON);
        this.state = 155;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===presentable_policyParser.ACCEPTING) {
            this.state = 152;
            this.accepting();
            this.state = 157;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
        this.state = 158;
        this.event();
        this.state = 162;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===presentable_policyParser.T__6) {
            this.state = 159;
            this.and_event();
            this.state = 164;
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

function AcceptingContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_accepting;
    return this;
}

AcceptingContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AcceptingContext.prototype.constructor = AcceptingContext;


AcceptingContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterAccepting(this);
	}
};

AcceptingContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitAccepting(this);
	}
};




presentable_policyParser.AcceptingContext = AcceptingContext;

presentable_policyParser.prototype.accepting = function() {

    var localctx = new AcceptingContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, presentable_policyParser.RULE_accepting);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 165;
        this.match(presentable_policyParser.ACCEPTING);
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
    this.enterRule(localctx, 20, presentable_policyParser.RULE_event);
    try {
        this.state = 177;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case presentable_policyParser.T__7:
            this.enterOuterAlt(localctx, 1);
            this.state = 167;
            this.period_event();
            break;
        case presentable_policyParser.T__8:
            this.enterOuterAlt(localctx, 2);
            this.state = 168;
            this.specific_date_event();
            break;
        case presentable_policyParser.INT:
            this.enterOuterAlt(localctx, 3);
            this.state = 169;
            this.relative_date_event();
            break;
        case presentable_policyParser.T__10:
            this.enterOuterAlt(localctx, 4);
            this.state = 170;
            this.pricing_agreement_event();
            break;
        case presentable_policyParser.T__11:
            this.enterOuterAlt(localctx, 5);
            this.state = 171;
            this.transaction_event();
            break;
        case presentable_policyParser.T__13:
        case presentable_policyParser.T__16:
            this.enterOuterAlt(localctx, 6);
            this.state = 172;
            this.guaranty_event();
            break;
        case presentable_policyParser.LICENSE:
            this.enterOuterAlt(localctx, 7);
            this.state = 173;
            this.signing_event();
            break;
        case presentable_policyParser.T__17:
        case presentable_policyParser.T__18:
            this.enterOuterAlt(localctx, 8);
            this.state = 174;
            this.access_count_event();
            break;
        case presentable_policyParser.T__19:
        case presentable_policyParser.T__20:
            this.enterOuterAlt(localctx, 9);
            this.state = 175;
            this.balance_event();
            break;
        case presentable_policyParser.T__21:
            this.enterOuterAlt(localctx, 10);
            this.state = 176;
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
    this.enterRule(localctx, 22, presentable_policyParser.RULE_and_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 179;
        this.match(presentable_policyParser.T__6);
        this.state = 180;
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
    this.enterRule(localctx, 24, presentable_policyParser.RULE_period_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 182;
        this.match(presentable_policyParser.T__7);
        this.state = 183;
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
    this.enterRule(localctx, 26, presentable_policyParser.RULE_specific_date_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 185;
        this.match(presentable_policyParser.T__8);
        this.state = 186;
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

Relative_date_eventContext.prototype.INT = function() {
    return this.getToken(presentable_policyParser.INT, 0);
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
    this.enterRule(localctx, 28, presentable_policyParser.RULE_relative_date_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 188;
        this.match(presentable_policyParser.INT);
        this.state = 189;
        this.time_unit();
        this.state = 190;
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
    this.enterRule(localctx, 30, presentable_policyParser.RULE_pricing_agreement_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 192;
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

Transaction_eventContext.prototype.INT = function() {
    return this.getToken(presentable_policyParser.INT, 0);
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
    this.enterRule(localctx, 32, presentable_policyParser.RULE_transaction_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 194;
        this.match(presentable_policyParser.T__11);
        this.state = 195;
        this.match(presentable_policyParser.INT);
        this.state = 196;
        this.match(presentable_policyParser.T__12);
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
    this.enterRule(localctx, 34, presentable_policyParser.RULE_guaranty_event);
    try {
        this.state = 200;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case presentable_policyParser.T__13:
            this.enterOuterAlt(localctx, 1);
            this.state = 198;
            this.contract_guaranty();
            break;
        case presentable_policyParser.T__16:
            this.enterOuterAlt(localctx, 2);
            this.state = 199;
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

Contract_guarantyContext.prototype.INT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(presentable_policyParser.INT);
    } else {
        return this.getToken(presentable_policyParser.INT, i);
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
    this.enterRule(localctx, 36, presentable_policyParser.RULE_contract_guaranty);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 202;
        this.match(presentable_policyParser.T__13);
        this.state = 203;
        this.match(presentable_policyParser.INT);
        this.state = 204;
        this.match(presentable_policyParser.T__14);
        this.state = 205;
        this.match(presentable_policyParser.INT);
        this.state = 206;
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

Platform_guarantyContext.prototype.INT = function() {
    return this.getToken(presentable_policyParser.INT, 0);
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
    this.enterRule(localctx, 38, presentable_policyParser.RULE_platform_guaranty);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 208;
        this.match(presentable_policyParser.T__16);
        this.state = 209;
        this.match(presentable_policyParser.INT);
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

Signing_eventContext.prototype.LICENSE = function() {
    return this.getToken(presentable_policyParser.LICENSE, 0);
};

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
    this.enterRule(localctx, 40, presentable_policyParser.RULE_signing_event);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 211;
        this.match(presentable_policyParser.LICENSE);
        this.state = 219; 
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
            this.state = 215;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while(_la===presentable_policyParser.T__3) {
                this.state = 212;
                this.match(presentable_policyParser.T__3);
                this.state = 217;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
            }
            this.state = 218;
            this.license_resource_id();
            this.state = 221; 
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        } while(_la===presentable_policyParser.T__3 || _la===presentable_policyParser.ID);
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
    this.enterRule(localctx, 42, presentable_policyParser.RULE_access_count_event);
    try {
        this.state = 225;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case presentable_policyParser.T__17:
            this.enterOuterAlt(localctx, 1);
            this.state = 223;
            this.visit_increment_event();
            break;
        case presentable_policyParser.T__18:
            this.enterOuterAlt(localctx, 2);
            this.state = 224;
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

Visit_increment_eventContext.prototype.INT = function() {
    return this.getToken(presentable_policyParser.INT, 0);
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
    this.enterRule(localctx, 44, presentable_policyParser.RULE_visit_increment_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 227;
        this.match(presentable_policyParser.T__17);
        this.state = 228;
        this.match(presentable_policyParser.INT);
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

Visit_eventContext.prototype.INT = function() {
    return this.getToken(presentable_policyParser.INT, 0);
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
    this.enterRule(localctx, 46, presentable_policyParser.RULE_visit_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 230;
        this.match(presentable_policyParser.T__18);
        this.state = 231;
        this.match(presentable_policyParser.INT);
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
    this.enterRule(localctx, 48, presentable_policyParser.RULE_balance_event);
    try {
        this.state = 235;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case presentable_policyParser.T__19:
            this.enterOuterAlt(localctx, 1);
            this.state = 233;
            this.balance_greater();
            break;
        case presentable_policyParser.T__20:
            this.enterOuterAlt(localctx, 2);
            this.state = 234;
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

Balance_greaterContext.prototype.INT = function() {
    return this.getToken(presentable_policyParser.INT, 0);
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
    this.enterRule(localctx, 50, presentable_policyParser.RULE_balance_greater);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 237;
        this.match(presentable_policyParser.T__19);
        this.state = 238;
        this.match(presentable_policyParser.INT);
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

Balance_smallerContext.prototype.INT = function() {
    return this.getToken(presentable_policyParser.INT, 0);
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
    this.enterRule(localctx, 52, presentable_policyParser.RULE_balance_smaller);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 240;
        this.match(presentable_policyParser.T__20);
        this.state = 241;
        this.match(presentable_policyParser.INT);
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
    this.enterRule(localctx, 54, presentable_policyParser.RULE_settlement_event);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 243;
        this.match(presentable_policyParser.T__21);
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
    this.enterRule(localctx, 56, presentable_policyParser.RULE_license_resource_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 245;
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

function Account_idContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_account_id;
    return this;
}

Account_idContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Account_idContext.prototype.constructor = Account_idContext;

Account_idContext.prototype.ID = function() {
    return this.getToken(presentable_policyParser.ID, 0);
};

Account_idContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterAccount_id(this);
	}
};

Account_idContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitAccount_id(this);
	}
};




presentable_policyParser.Account_idContext = Account_idContext;

presentable_policyParser.prototype.account_id = function() {

    var localctx = new Account_idContext(this, this._ctx, this.state);
    this.enterRule(localctx, 58, presentable_policyParser.RULE_account_id);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 247;
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

UsersContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(presentable_policyParser.ID);
    } else {
        return this.getToken(presentable_policyParser.ID, i);
    }
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
    this.enterRule(localctx, 60, presentable_policyParser.RULE_users);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 249;
        this.match(presentable_policyParser.ID);
        this.state = 254;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 250;
                this.match(presentable_policyParser.T__3);
                this.state = 251;
                this.match(presentable_policyParser.ID); 
            }
            this.state = 256;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
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

function User_groupsContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_user_groups;
    return this;
}

User_groupsContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
User_groupsContext.prototype.constructor = User_groupsContext;

User_groupsContext.prototype.ID = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(presentable_policyParser.ID);
    } else {
        return this.getToken(presentable_policyParser.ID, i);
    }
};


User_groupsContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterUser_groups(this);
	}
};

User_groupsContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitUser_groups(this);
	}
};




presentable_policyParser.User_groupsContext = User_groupsContext;

presentable_policyParser.prototype.user_groups = function() {

    var localctx = new User_groupsContext(this, this._ctx, this.state);
    this.enterRule(localctx, 62, presentable_policyParser.RULE_user_groups);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 257;
        this.match(presentable_policyParser.ID);
        this.state = 262;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 258;
                this.match(presentable_policyParser.T__3);
                this.state = 259;
                this.match(presentable_policyParser.ID); 
            }
            this.state = 264;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
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

function AndContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_and;
    return this;
}

AndContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
AndContext.prototype.constructor = AndContext;


AndContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterAnd(this);
	}
};

AndContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitAnd(this);
	}
};




presentable_policyParser.AndContext = AndContext;

presentable_policyParser.prototype.and = function() {

    var localctx = new AndContext(this, this._ctx, this.state);
    this.enterRule(localctx, 64, presentable_policyParser.RULE_and);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 265;
        this.match(presentable_policyParser.T__1);
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

function View_unitContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = presentable_policyParser.RULE_view_unit;
    return this;
}

View_unitContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
View_unitContext.prototype.constructor = View_unitContext;


View_unitContext.prototype.enterRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.enterView_unit(this);
	}
};

View_unitContext.prototype.exitRule = function(listener) {
    if(listener instanceof presentable_policyListener ) {
        listener.exitView_unit(this);
	}
};




presentable_policyParser.View_unitContext = View_unitContext;

presentable_policyParser.prototype.view_unit = function() {

    var localctx = new View_unitContext(this, this._ctx, this.state);
    this.enterRule(localctx, 66, presentable_policyParser.RULE_view_unit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 267;
        _la = this._input.LA(1);
        if(!(_la===presentable_policyParser.T__22 || _la===presentable_policyParser.T__23)) {
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
    this.enterRule(localctx, 68, presentable_policyParser.RULE_time_unit);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 269;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << presentable_policyParser.T__15) | (1 << presentable_policyParser.T__24) | (1 << presentable_policyParser.T__25) | (1 << presentable_policyParser.T__26))) !== 0))) {
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

Start_hourContext.prototype.INT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(presentable_policyParser.INT);
    } else {
        return this.getToken(presentable_policyParser.INT, i);
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
    this.enterRule(localctx, 70, presentable_policyParser.RULE_start_hour);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 271;
        this.match(presentable_policyParser.INT);
        this.state = 272;
        this.match(presentable_policyParser.T__5);
        this.state = 273;
        this.match(presentable_policyParser.INT);
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

End_hourContext.prototype.INT = function(i) {
	if(i===undefined) {
		i = null;
	}
    if(i===null) {
        return this.getTokens(presentable_policyParser.INT);
    } else {
        return this.getToken(presentable_policyParser.INT, i);
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
    this.enterRule(localctx, 72, presentable_policyParser.RULE_end_hour);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 275;
        this.match(presentable_policyParser.INT);
        this.state = 276;
        this.match(presentable_policyParser.T__5);
        this.state = 277;
        this.match(presentable_policyParser.INT);
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


exports.presentable_policyParser = presentable_policyParser;
