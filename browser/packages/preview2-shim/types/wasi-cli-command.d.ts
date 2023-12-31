import { WasiCliEnvironment } from './interfaces/wasi-cli-environment';
import { WasiCliExit } from './interfaces/wasi-cli-exit';
import { WasiCliStderr } from './interfaces/wasi-cli-stderr';
import { WasiCliStdin } from './interfaces/wasi-cli-stdin';
import { WasiCliStdout } from './interfaces/wasi-cli-stdout';
import { WasiCliTerminalInput } from './interfaces/wasi-cli-terminal-input';
import { WasiCliTerminalOutput } from './interfaces/wasi-cli-terminal-output';
import { WasiCliTerminalStderr } from './interfaces/wasi-cli-terminal-stderr';
import { WasiCliTerminalStdin } from './interfaces/wasi-cli-terminal-stdin';
import { WasiCliTerminalStdout } from './interfaces/wasi-cli-terminal-stdout';
import { WasiClocksMonotonicClock } from './interfaces/wasi-clocks-monotonic-clock';
import { WasiClocksTimezone } from './interfaces/wasi-clocks-timezone';
import { WasiClocksWallClock } from './interfaces/wasi-clocks-wall-clock';
import { WasiFilesystemPreopens } from './interfaces/wasi-filesystem-preopens';
import { WasiFilesystemTypes } from './interfaces/wasi-filesystem-types';
import { WasiIoPoll } from './interfaces/wasi-io-poll';
import { WasiIoStreams } from './interfaces/wasi-io-streams';
import { WasiRandomInsecureSeed } from './interfaces/wasi-random-insecure-seed';
import { WasiRandomInsecure } from './interfaces/wasi-random-insecure';
import { WasiRandomRandom } from './interfaces/wasi-random-random';
import { WasiSocketsInstanceNetwork } from './interfaces/wasi-sockets-instance-network';
import { WasiSocketsIpNameLookup } from './interfaces/wasi-sockets-ip-name-lookup';
import { WasiSocketsNetwork } from './interfaces/wasi-sockets-network';
import { WasiSocketsTcpCreateSocket } from './interfaces/wasi-sockets-tcp-create-socket';
import { WasiSocketsTcp } from './interfaces/wasi-sockets-tcp';
import { WasiSocketsUdpCreateSocket } from './interfaces/wasi-sockets-udp-create-socket';
import { WasiSocketsUdp } from './interfaces/wasi-sockets-udp';
import { WasiCliRun } from './interfaces/wasi-cli-run';
export const run: typeof WasiCliRun;
