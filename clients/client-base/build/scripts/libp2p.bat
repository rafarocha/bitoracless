@rem
@rem Copyright 2015 the original author or authors.
@rem
@rem Licensed under the Apache License, Version 2.0 (the "License");
@rem you may not use this file except in compliance with the License.
@rem You may obtain a copy of the License at
@rem
@rem      https://www.apache.org/licenses/LICENSE-2.0
@rem
@rem Unless required by applicable law or agreed to in writing, software
@rem distributed under the License is distributed on an "AS IS" BASIS,
@rem WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
@rem See the License for the specific language governing permissions and
@rem limitations under the License.
@rem

@if "%DEBUG%"=="" @echo off
@rem ##########################################################################
@rem
@rem  libp2p startup script for Windows
@rem
@rem ##########################################################################

@rem Set local scope for the variables with windows NT shell
if "%OS%"=="Windows_NT" setlocal

set DIRNAME=%~dp0
if "%DIRNAME%"=="" set DIRNAME=.
@rem This is normally unused
set APP_BASE_NAME=%~n0
set APP_HOME=%DIRNAME%..

@rem Resolve any "." and ".." in APP_HOME to make it shorter.
for %%i in ("%APP_HOME%") do set APP_HOME=%%~fi

@rem Add default JVM options here. You can also use JAVA_OPTS and LIBP2P_OPTS to pass JVM options to this script.
set DEFAULT_JVM_OPTS=

@rem Find java.exe
if defined JAVA_HOME goto findJavaFromJavaHome

set JAVA_EXE=java.exe
%JAVA_EXE% -version >NUL 2>&1
if %ERRORLEVEL% equ 0 goto execute

echo.
echo ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH.
echo.
echo Please set the JAVA_HOME variable in your environment to match the
echo location of your Java installation.

goto fail

:findJavaFromJavaHome
set JAVA_HOME=%JAVA_HOME:"=%
set JAVA_EXE=%JAVA_HOME%/bin/java.exe

if exist "%JAVA_EXE%" goto execute

echo.
echo ERROR: JAVA_HOME is set to an invalid directory: %JAVA_HOME%
echo.
echo Please set the JAVA_HOME variable in your environment to match the
echo location of your Java installation.

goto fail

:execute
@rem Setup the command line

set CLASSPATH=%APP_HOME%\lib\libp2p-2.2.7.jar;%APP_HOME%\lib\snappy-java-1.1.10.5.jar;%APP_HOME%\lib\protobuf-java-util-3.25.8.jar;%APP_HOME%\lib\protobuf-java-3.25.8.jar;%APP_HOME%\lib\grpc-netty-1.75.0.jar;%APP_HOME%\lib\dnsjava-3.6.2.jar;%APP_HOME%\lib\logback-classic-1.2.13.jar;%APP_HOME%\lib\route53-2.18.41.jar;%APP_HOME%\lib\aws-xml-protocol-2.18.41.jar;%APP_HOME%\lib\aws-query-protocol-2.18.41.jar;%APP_HOME%\lib\protocol-core-2.18.41.jar;%APP_HOME%\lib\aws-core-2.18.41.jar;%APP_HOME%\lib\auth-2.18.41.jar;%APP_HOME%\lib\regions-2.18.41.jar;%APP_HOME%\lib\sdk-core-2.18.41.jar;%APP_HOME%\lib\apache-client-2.18.41.jar;%APP_HOME%\lib\netty-nio-client-2.18.41.jar;%APP_HOME%\lib\http-client-spi-2.18.41.jar;%APP_HOME%\lib\metrics-spi-2.18.41.jar;%APP_HOME%\lib\json-utils-2.18.41.jar;%APP_HOME%\lib\profiles-2.18.41.jar;%APP_HOME%\lib\utils-2.18.41.jar;%APP_HOME%\lib\alidns20150109-3.0.1.jar;%APP_HOME%\lib\tea-openapi-0.2.8.jar;%APP_HOME%\lib\alibabacloud-gateway-spi-0.0.1.jar;%APP_HOME%\lib\tea-rpc-0.1.2.jar;%APP_HOME%\lib\credentials-java-0.2.4.jar;%APP_HOME%\lib\tea-1.2.0.jar;%APP_HOME%\lib\slf4j-api-1.7.36.jar;%APP_HOME%\lib\bcpkix-jdk18on-1.79.jar;%APP_HOME%\lib\bcutil-jdk18on-1.79.jar;%APP_HOME%\lib\bcprov-jdk18on-1.79.jar;%APP_HOME%\lib\commons-lang3-3.18.0.jar;%APP_HOME%\lib\commons-cli-1.5.0.jar;%APP_HOME%\lib\grpc-util-1.75.0.jar;%APP_HOME%\lib\grpc-core-1.75.0.jar;%APP_HOME%\lib\grpc-context-1.75.0.jar;%APP_HOME%\lib\grpc-api-1.75.0.jar;%APP_HOME%\lib\guava-33.3.1-jre.jar;%APP_HOME%\lib\jsr305-3.0.2.jar;%APP_HOME%\lib\tea-util-0.2.16.jar;%APP_HOME%\lib\openapiutil-0.2.0.jar;%APP_HOME%\lib\tea-rpc-util-0.1.3.jar;%APP_HOME%\lib\gson-2.11.0.jar;%APP_HOME%\lib\error_prone_annotations-2.30.0.jar;%APP_HOME%\lib\j2objc-annotations-3.0.0.jar;%APP_HOME%\lib\animal-sniffer-annotations-1.24.jar;%APP_HOME%\lib\netty-codec-http2-4.1.124.Final.jar;%APP_HOME%\lib\netty-handler-proxy-4.1.124.Final.jar;%APP_HOME%\lib\perfmark-api-0.27.0.jar;%APP_HOME%\lib\netty-codec-http-4.1.124.Final.jar;%APP_HOME%\lib\netty-handler-4.1.124.Final.jar;%APP_HOME%\lib\netty-transport-native-unix-common-4.1.124.Final.jar;%APP_HOME%\lib\endpoints-spi-2.18.41.jar;%APP_HOME%\lib\annotations-2.18.41.jar;%APP_HOME%\lib\endpoint-util-0.0.7.jar;%APP_HOME%\lib\logback-core-1.2.13.jar;%APP_HOME%\lib\failureaccess-1.0.2.jar;%APP_HOME%\lib\listenablefuture-9999.0-empty-to-avoid-conflict-with-guava.jar;%APP_HOME%\lib\checker-qual-3.43.0.jar;%APP_HOME%\lib\netty-codec-socks-4.1.124.Final.jar;%APP_HOME%\lib\netty-codec-4.1.124.Final.jar;%APP_HOME%\lib\netty-transport-4.1.124.Final.jar;%APP_HOME%\lib\netty-buffer-4.1.124.Final.jar;%APP_HOME%\lib\netty-resolver-4.1.124.Final.jar;%APP_HOME%\lib\netty-common-4.1.124.Final.jar;%APP_HOME%\lib\annotations-4.1.1.4.jar;%APP_HOME%\lib\reactive-streams-1.0.3.jar;%APP_HOME%\lib\eventstream-1.0.1.jar;%APP_HOME%\lib\third-party-jackson-core-2.18.41.jar;%APP_HOME%\lib\httpclient-4.5.13.jar;%APP_HOME%\lib\httpcore-4.4.13.jar;%APP_HOME%\lib\okhttp-3.12.13.jar;%APP_HOME%\lib\org.jacoco.agent-0.8.4-runtime.jar;%APP_HOME%\lib\tea-xml-0.1.5.jar;%APP_HOME%\lib\commons-codec-1.15.jar;%APP_HOME%\lib\commons-logging-1.2.jar;%APP_HOME%\lib\dom4j-2.1.3.jar;%APP_HOME%\lib\jaxb-api-2.3.0.jar;%APP_HOME%\lib\jaxb-core-2.3.0.jar;%APP_HOME%\lib\jaxb-impl-2.3.0.jar;%APP_HOME%\lib\ini4j-0.5.4.jar;%APP_HOME%\lib\okio-1.15.0.jar;%APP_HOME%\lib\jaxen-1.1.6.jar;%APP_HOME%\lib\stax-api-1.0-2.jar;%APP_HOME%\lib\xsdlib-2013.6.1.jar;%APP_HOME%\lib\relaxngDatatype-20020414.jar


@rem Execute libp2p
"%JAVA_EXE%" %DEFAULT_JVM_OPTS% %JAVA_OPTS% %LIBP2P_OPTS%  -classpath "%CLASSPATH%" org.tron.p2p.example.StartApp %*

:end
@rem End local scope for the variables with windows NT shell
if %ERRORLEVEL% equ 0 goto mainEnd

:fail
rem Set variable LIBP2P_EXIT_CONSOLE if you need the _script_ return code instead of
rem the _cmd.exe /c_ return code!
set EXIT_CODE=%ERRORLEVEL%
if %EXIT_CODE% equ 0 set EXIT_CODE=1
if not ""=="%LIBP2P_EXIT_CONSOLE%" exit %EXIT_CODE%
exit /b %EXIT_CODE%

:mainEnd
if "%OS%"=="Windows_NT" endlocal

:omega
