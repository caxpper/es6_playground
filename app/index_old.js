
import addHeader from './helpers';
import logFunction, {add,substract,mul,div} from './math';
import * as mathStuff from './math';

logFunction();
addHeader('2 + 4 = ' + add(2,4));
addHeader('2 - 4 = ' + substract(2,4));
addHeader('2 * 4 = ' + mul(2,4));
addHeader('2 / 4 = ' + div(2,4));
