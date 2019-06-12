# test-10.x-vs-8.10-lambdas

This repo is to point out the differences commands between `nodejs8.10` and `nodejs10.x` on AWS lambda. The reason I created this was to prove the differences for some commands that exist on `8.10` but don't exist on `10.x`. When AWS announced the new runtime (`10.x`) I was working on a project which was originally written in 8.10 so I updated to 10.x but started getting errors with no code changes.

I created this using the [serverless](https://serverless.com/)  framework. You can test it yourself.

```
npm install

cd 8.10
serverless deploy

cd ../10.x
serverless deploy

```

#### e.g.


```
  const { execSync } = require('child_process');

  console.log(execSync(`which which`).toString());
```

#### 8.10 results:

```
/usr/bin/which
```

#### 10.x results:

```
{
    "errorType": "Error",
    "errorMessage": "Command failed: which file\n/bin/sh: which: command not found\n",
    "stack": [
        "Error: Command failed: which file",
        "/bin/sh: which: command not found",
        "",
        "    at checkExecSyncError (child_process.js:616:11)",
        "    at execSync (child_process.js:653:13)",
        "    at Runtime.module.exports.testLambdaNode [as handler] (/var/task/handler.js:12:15)",
        "    at Runtime.handleOnce (/var/runtime/Runtime.js:63:25)",
        "    at process._tickCallback (internal/process/next_tick.js:68:7)"

...
```

### Commands missing on 10.x
- `file`
- `find`
- `which`
- `gunzip`

### nodejs8.10 /usr/bin
```
ls -l /usr/bin
-rwxr-xr-x 1 root root 105408 Mar 20 22:13 a2p
-rwxr-xr-x 1 root root 25528 Dec 8 2015 addr2line
-rwxr-xr-x 1 root root 6056 Jun 22 2016 animate
lrwxrwxrwx 1 root root 55 May 23 19:07 appletviewer8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/appletviewer
-rwxr-xr-x 1 root root 56920 Dec 8 2015 ar
-rwxr-xr-x 1 root root 353440 Dec 8 2015 as
-rwxr-xr-x 1 root root 28096 Jan 6 2012 aserver
lrwxrwxrwx 1 root root 14 May 23 19:07 awk -> ../../bin/gawk
-rwxr-xr-x 1 root root 33152 Feb 25 2016 base64
lrwxrwxrwx 1 root root 10 May 23 19:07 bashbug -> bashbug-64
-rwxr-xr-x 1 root root 6933 Aug 30 2017 bashbug-64
-rwxr-xr-x 1 root root 7080 Jan 6 2012 bdftopcf
-rwxr-xr-x 1 root root 292 Dec 19 22:52 bdftops
-rwxr-xr-x 1 root root 66080 Nov 27 2013 berkeley_db_svc
-rwxr-xr-x 1 root root 13848 Feb 23 2017 bmp2tiff
-rwxr-xr-x 1 root root 1538 Sep 9 2014 build-classpath
-rwxr-xr-x 1 root root 383 Sep 19 2006 build-classpath-directory
-rwxr-xr-x 1 root root 1572 Sep 19 2006 build-jar-repository
lrwxrwxrwx 1 root root 5 May 23 19:07 bunzip2 -> bzip2
lrwxrwxrwx 1 root root 5 May 23 19:07 bzcat -> bzip2
lrwxrwxrwx 1 root root 6 May 23 19:07 bzcmp -> bzdiff
-rwxr-xr-x 1 root root 2128 Jan 15 2011 bzdiff
-rwxr-xr-x 1 root root 1677 Jan 15 2011 bzgrep
-rwxr-xr-x 1 root root 32936 Jan 15 2011 bzip2
-rwxr-xr-x 1 root root 10872 Jan 15 2011 bzip2recover
lrwxrwxrwx 1 root root 6 May 23 19:07 bzless -> bzmore
-rwxr-xr-x 1 root root 1259 Jan 15 2011 bzmore
-rwxr-xr-x 1 root root 36607 Mar 20 22:13 c2ph
-rwxr-xr-x 1 root root 58256 Sep 11 2014 cairo-sphinx
-rwxr-xr-x 1 root root 29096 Apr 26 2017 cal
-rwxr-xr-x 1 root root 1644 Mar 19 16:22 ca-legacy
lrwxrwxrwx 1 root root 3 May 23 19:07 captoinfo -> tic
-rwxr-xr-x 1 root root 3336 Nov 28 2018 catchsegv
-rwxr-xr-x 1 root root 168592 Oct 23 2018 certutil
-rwxr-xr-x 1 root root 23624 Dec 8 2015 c++filt
-rwxr-xr-x 1 root root 58656 Feb 25 2016 chcon
-rwxr-xr-x 1 root root 3329 Sep 19 2006 check-binary-files
-rwxr-xr-x 1 root root 4728 Nov 27 2013 checksctp
-rwxr-xr-x 1 root root 24312 Apr 26 2017 chrt
-rwxr-xr-x 1 root root 6744 Feb 19 2011 chvt
-rwxr-xr-x 1 root root 28800 Feb 25 2016 cksum
-rwxr-xr-x 1 root root 13219 Sep 19 2006 clean-binary-files
-rwxr-xr-x 1 root root 5208 Aug 17 2016 clear
-rwxr-xr-x 1 root root 44096 Aug 18 2015 cmp
-rwxr-xr-x 1 root root 102224 Oct 23 2018 cmsutil
-rwxr-xr-x 1 root root 19712 Apr 26 2017 col
-rwxr-xr-x 1 root root 11008 Apr 26 2017 colcrt
-rwxr-xr-x 1 root root 15560 Apr 26 2017 colrm
-rwxr-xr-x 1 root root 21224 Apr 26 2017 column
-rwxr-xr-x 1 root root 32256 Feb 25 2016 comm
-rwxr-xr-x 1 root root 7080 Jun 22 2016 compare
-rwxr-xr-x 1 root root 6056 Jun 22 2016 composite
-rwxr-xr-x 1 root root 6056 Jun 22 2016 conjure
-rwxr-xr-x 1 root root 6056 Jun 22 2016 convert
-rwxr-xr-x 1 root root 4656 Sep 19 2006 create-jar-links
-rwxr-xr-x 1 root root 114352 Oct 23 2018 crlutil
-rwxr-xr-x 1 root root 44832 Feb 25 2016 csplit
-rwxr-xr-x 1 root root 176384 Jan 18 22:06 curl
lrwxrwxrwx 1 root root 13 May 23 19:07 cut -> ../../bin/cut
-rwxr-xr-x 1 root root 7960 Nov 27 2013 db_archive
-rwxr-xr-x 1 root root 9880 Nov 27 2013 db_checkpoint
-rwxr-xr-x 1 root root 22096 Nov 27 2013 db_codegen
-rwxr-xr-x 1 root root 9864 Nov 27 2013 db_deadlock
-rwxr-xr-x 1 root root 11744 Nov 27 2013 db_dump
-rwxr-xr-x 1 root root 61984 Nov 27 2013 db_dump185
-rwxr-xr-x 1 root root 17160 Nov 27 2013 db_hotbackup
-rwxr-xr-x 1 root root 23272 Nov 27 2013 db_load
-rwxr-xr-x 1 root root 65200 Nov 27 2013 db_printlog
-rwxr-xr-x 1 root root 9832 Nov 27 2013 db_recover
-rwxr-xr-x 1 root root 10840 Nov 27 2013 db_stat
-rwxr-xr-x 1 root root 8584 Nov 27 2013 db_upgrade
-rwxr-xr-x 1 root root 9000 Nov 27 2013 db_verify
-rwxr-xr-x 1 root root 7192 Feb 19 2011 deallocvt
-rwxr-xr-x 1 root root 193512 Aug 18 2015 diff
-rwxr-xr-x 1 root root 56552 Aug 18 2015 diff3
-rwxr-xr-x 1 root root 1233 Sep 19 2006 diff-jars
-rwxr-xr-x 1 root root 113440 Feb 25 2016 dir
-rwxr-xr-x 1 root root 37088 Feb 25 2016 dircolors
-rwxr-xr-x 1 root root 25792 Feb 25 2016 dirname
-rwxr-xr-x 1 root root 6056 Jun 22 2016 display
-rwxr-xr-x 1 root root 105120 Feb 25 2016 du
-rwxr-xr-x 1 root root 554 Dec 19 22:52 dumphint
-rwxr-xr-x 1 root root 1057 Dec 19 22:52 dvipdf
-rwxr-xr-x 1 root root 2781312 Dec 8 2015 dwp
-rwxr-xr-x 1 root root 41176 Apr 26 2017 eject
-rwxr-xr-x 1 root root 28136 Dec 8 2015 elfedit
lrwxrwxrwx 1 root root 13 May 23 19:07 env -> ../../bin/env
-rwxr-xr-x 1 root root 632 Dec 19 22:52 eps2eps
-rwxr-xr-x 1 root root 138584 Sep 10 2014 eqn
-rwxr-xr-x 1 root root 19656 Feb 10 2016 eu-addr2line
-rwxr-xr-x 1 root root 32552 Feb 10 2016 eu-ar
-rwxr-xr-x 1 root root 29688 Feb 10 2016 eu-elfcmp
-rwxr-xr-x 1 root root 105728 Feb 10 2016 eu-elflint
-rwxr-xr-x 1 root root 15416 Feb 10 2016 eu-findtextrel
-rwxr-xr-x 1 root root 2911 Feb 10 2016 eu-make-debug-archive
-rwxr-xr-x 1 root root 40712 Feb 10 2016 eu-nm
-rwxr-xr-x 1 root root 30192 Feb 10 2016 eu-objdump
-rwxr-xr-x 1 root root 16512 Feb 10 2016 eu-ranlib
-rwxr-xr-x 1 root root 177120 Feb 10 2016 eu-readelf
-rwxr-xr-x 1 root root 15280 Feb 10 2016 eu-size
-rwxr-xr-x 1 root root 23680 Feb 10 2016 eu-stack
-rwxr-xr-x 1 root root 16560 Feb 10 2016 eu-strings
-rwxr-xr-x 1 root root 47608 Feb 10 2016 eu-strip
-rwxr-xr-x 1 root root 44408 Feb 10 2016 eu-unstrip
-rwxr-xr-x 1 root root 29952 Feb 25 2016 expand
-rwxr-xr-x 1 root root 36352 Feb 25 2016 expr
lrwxrwxrwx 1 root root 51 May 23 19:07 extcheck8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/extcheck
-rwxr-xr-x 1 root root 92096 Feb 25 2016 factor
-rwxr-xr-x 1 root root 16288 Apr 26 2017 fallocate
-rwxr-xr-x 1 root root 15704 Feb 23 2017 fax2ps
-rwxr-xr-x 1 root root 14240 Feb 23 2017 fax2tiff
-rwxr-xr-x 1 root root 13488 Mar 12 2015 fc-cache
-rwxr-xr-x 1 root root 11528 Mar 12 2015 fc-cat
-rwxr-xr-x 1 root root 9160 Mar 12 2015 fc-list
-rwxr-xr-x 1 root root 11104 Mar 12 2015 fc-match
-rwxr-xr-x 1 root root 7880 Mar 12 2015 fc-query
-rwxr-xr-x 1 root root 8216 Mar 12 2015 fc-scan
-rwxr-xr-x 1 root root 7312 Feb 19 2011 fgconsole
-rwxr-xr-x 1 root root 20224 Mar 21 18:35 file
lrwxrwxrwx 1 root root 14 May 23 19:07 find -> ../../bin/find
-rwxr-xr-x 1 root root 23614 Mar 20 22:13 find2perl
-rwxr-xr-x 1 root root 749 Sep 19 2006 find-jar
-rwxr-xr-x 1 root root 19504 Apr 26 2017 flock
-rwxr-xr-x 1 root root 34304 Feb 25 2016 fmt
-rwxr-xr-x 1 root root 32320 Feb 25 2016 fold
-rwxr-xr-x 1 root root 300 Dec 19 22:52 font2c
-rwxr-xr-x 1 root root 33272 Jan 6 2012 fonttosfnt
-rwxr-xr-x 1 root root 8832 Mar 17 2015 free
-rwxr-xr-x 1 root root 27504 Aug 17 2016 funzip
lrwxrwxrwx 1 root root 14 May 23 19:07 gawk -> ../../bin/gawk
-rwxr-xr-x 1 root root 1717 Aug 6 2015 gcore
-rwxr-xr-x 1 root root 6343952 Aug 6 2015 gdb
-rwxr-xr-x 1 root root 1118 Aug 6 2015 gdb-add-index
-rwxr-xr-x 1 root root 33344 Mar 4 2015 gdbus
-rwxr-xr-x 1 root root 23064 Nov 29 2018 gencat
-rwxr-xr-x 1 root root 586 Mar 20 2017 gendiff
lrwxrwxrwx 1 root root 3 May 23 19:07 geqn -> eqn
-rwxr-xr-x 1 root root 22864 Nov 29 2018 getconf
-rwxr-xr-x 1 root root 27832 Nov 29 2018 getent
-rwxr-xr-x 1 root root 7464 Feb 19 2011 getkeycodes
-rwxr-xr-x 1 root root 13200 Apr 26 2017 getopt
lrwxrwxrwx 1 root root 2 May 23 19:07 ghostscript -> gs
-rwxr-xr-x 1 root root 14080 Feb 23 2017 gif2tiff
-rwxr-xr-x 1 root root 8120 Mar 4 2015 gio-querymodules-64
-rwxr-xr-x 1 root root 40424 Mar 4 2015 glib-compile-schemas
lrwxrwxrwx 1 root root 4 May 23 19:07 gmake -> make
lrwxrwxrwx 1 root root 4 May 23 19:07 gneqn -> neqn
lrwxrwxrwx 1 root root 5 May 23 19:07 gnroff -> nroff
lrwxrwxrwx 1 root root 21 May 23 19:07 gpg -> /etc/alternatives/gpg
-rwxr-xr-x 1 root root 741184 Aug 24 2018 gpg2
-rwxr-xr-x 1 root root 289824 Aug 24 2018 gpg-agent
-rwxr-xr-x 1 root root 135904 Aug 24 2018 gpgconf
-rwxr-xr-x 1 root root 146440 Aug 24 2018 gpg-connect-agent
-rwxr-xr-x 1 root root 19080 Oct 17 2013 gpg-error
-rwxr-xr-x 1 root root 23424 Aug 24 2018 gpgparsemail
lrwxrwxrwx 1 root root 26 May 23 19:07 gpgsplit -> /etc/alternatives/gpgsplit
-rwxr-xr-x 1 root root 48592 Aug 24 2018 gpgsplit2
lrwxrwxrwx 1 root root 22 May 23 19:07 gpgv -> /etc/alternatives/gpgv
-rwxr-xr-x 1 root root 342704 Aug 24 2018 gpgv2
lrwxrwxrwx 1 root root 25 May 23 19:07 gpg-zip -> /etc/alternatives/gpg-zip
-rwxr-xr-x 1 root root 3303 Aug 24 2018 gpg-zip2
lrwxrwxrwx 1 root root 3 May 23 19:07 gpic -> pic
-rwxr-xr-x 1 root root 95032 Dec 8 2015 gprof
-rwxr-xr-x 1 root root 77368 Sep 10 2014 groff
-rwxr-xr-x 1 root root 134904 Sep 10 2014 grops
-rwxr-xr-x 1 root root 92480 Sep 10 2014 grotty
-rwxr-xr-x 1 root root 28064 Feb 25 2016 groups
-rwxr-xr-x 1 root root 6824 Dec 19 22:52 gs
-rwxr-xr-x 1 root root 337 Dec 19 22:52 gsbj
-rwxr-xr-x 1 root root 339 Dec 19 22:52 gsdj
-rwxr-xr-x 1 root root 342 Dec 19 22:52 gsdj500
-rwxr-xr-x 1 root root 19648 Mar 4 2015 gsettings
-rwxr-xr-x 1 root root 340 Dec 19 22:52 gslj
-rwxr-xr-x 1 root root 337 Dec 19 22:52 gslp
-rwxr-xr-x 1 root root 264 Dec 19 22:52 gsnd
lrwxrwxrwx 1 root root 6 May 23 19:07 gsoelim -> soelim
-rwxr-xr-x 1 root root 1073 Aug 6 2015 gstack
lrwxrwxrwx 1 root root 3 May 23 19:07 gtbl -> tbl
lrwxrwxrwx 1 root root 5 May 23 19:07 gtroff -> troff
lrwxrwxrwx 1 root root 16 May 23 19:07 gunzip -> ../../bin/gunzip
-rwxr-xr-x 1 root root 5931 Feb 24 2016 gzexe
lrwxrwxrwx 1 root root 14 May 23 19:07 gzip -> ../../bin/gzip
-rwxr-xr-x 1 root root 28310 Mar 20 22:13 h2ph
-rwxr-xr-x 1 root root 36480 Feb 25 2016 head
-rwxr-xr-x 1 root root 27608 Apr 26 2017 hexdump
-rwxr-xr-x 1 root root 25152 Feb 25 2016 hostid
lrwxrwxrwx 1 root root 7 May 23 19:07 i386 -> setarch
-rwxr-xr-x 1 root root 60312 Nov 29 2018 iconv
-rwxr-xr-x 1 root root 36576 Feb 25 2016 id
-rwxr-xr-x 1 root root 7080 Jun 22 2016 identify
lrwxrwxrwx 1 root root 47 May 23 19:07 idlj8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/idlj
-rwxr-xr-x 1 root root 32488 Jan 16 2011 idn
-rwxr-xr-x 1 root root 50968 Mar 10 2017 idn2
-rwxr-xr-x 1 root root 3091 Oct 14 2012 igawk
-rwxr-xr-x 1 root root 6056 Jun 22 2016 import
-rwxr-xr-x 1 root root 260792 Sep 15 2014 info
-rwxr-xr-x 1 root root 50768 Aug 17 2016 infocmp
-rwxr-xr-x 1 root root 19384 Sep 15 2014 infokey
lrwxrwxrwx 1 root root 3 May 23 19:07 infotocap -> tic
-rwxr-xr-x 1 root root 134280 Feb 25 2016 install
-rwxr-xr-x 1 root root 17272 Apr 26 2017 ionice
-rwxr-xr-x 1 root root 19464 Apr 26 2017 ipcmk
-rwxr-xr-x 1 root root 19976 Apr 26 2017 ipcrm
-rwxr-xr-x 1 root root 41416 Apr 26 2017 ipcs
-rwxr-xr-x 1 root root 16688 Apr 26 2017 isosize
lrwxrwxrwx 1 root root 46 May 23 19:07 jar8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/jar
lrwxrwxrwx 1 root root 52 May 23 19:07 jarsigner8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/jarsigner
lrwxrwxrwx 1 root root 22 May 23 19:07 java -> /etc/alternatives/java
lrwxrwxrwx 1 root root 47 May 23 19:07 java7 -> //usr/lib/jvm/jre-1.7.0-openjdk.x86_64/bin/java
lrwxrwxrwx 1 root root 46 May 23 19:07 java8 -> /usr/lib/jvm/jre-1.8.0-openjdk.x86_64/bin/java
lrwxrwxrwx 1 root root 48 May 23 19:07 javac8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/javac
lrwxrwxrwx 1 root root 50 May 23 19:07 javadoc8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/javadoc
lrwxrwxrwx 1 root root 48 May 23 19:07 javah8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/javah
lrwxrwxrwx 1 root root 48 May 23 19:07 javap8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/javap
lrwxrwxrwx 1 root root 55 May 23 19:07 java-rmi.cgi8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/java-rmi.cgi
lrwxrwxrwx 1 root root 47 May 23 19:07 jcmd8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/jcmd
lrwxrwxrwx 1 root root 51 May 23 19:07 jconsole8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/jconsole
lrwxrwxrwx 1 root root 46 May 23 19:07 jdb8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/jdb
lrwxrwxrwx 1 root root 48 May 23 19:07 jdeps8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/jdeps
lrwxrwxrwx 1 root root 47 May 23 19:07 jhat8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/jhat
lrwxrwxrwx 1 root root 48 May 23 19:07 jinfo8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/jinfo
lrwxrwxrwx 1 root root 21 May 23 19:07 jjs -> /etc/alternatives/jjs
lrwxrwxrwx 1 root root 45 May 23 19:07 jjs8 -> /usr/lib/jvm/jre-1.8.0-openjdk.x86_64/bin/jjs
lrwxrwxrwx 1 root root 47 May 23 19:07 jmap8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/jmap
-rwxr-xr-x 1 root root 44704 Feb 25 2016 join
lrwxrwxrwx 1 root root 46 May 23 19:07 jps8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/jps
lrwxrwxrwx 1 root root 53 May 23 19:07 jrunscript8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/jrunscript
lrwxrwxrwx 1 root root 52 May 23 19:07 jsadebugd8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/jsadebugd
lrwxrwxrwx 1 root root 49 May 23 19:07 jstack8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/jstack
lrwxrwxrwx 1 root root 48 May 23 19:07 jstat8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/jstat
lrwxrwxrwx 1 root root 49 May 23 19:07 jstatd8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/jstatd
-rwxr-xr-x 1 root root 1757 Sep 19 2006 jvmjar
-rwxr-xr-x 1 root root 8224 Feb 19 2011 kbdrate
lrwxrwxrwx 1 root root 25 May 23 19:07 keytool -> /etc/alternatives/keytool
lrwxrwxrwx 1 root root 50 May 23 19:07 keytool7 -> //usr/lib/jvm/jre-1.7.0-openjdk.x86_64/bin/keytool
lrwxrwxrwx 1 root root 49 May 23 19:07 keytool8 -> /usr/lib/jvm/jre-1.8.0-openjdk.x86_64/bin/keytool
lrwxrwxrwx 1 root root 14 May 23 19:07 kill -> ../../bin/kill
-rwxr-xr-x 1 root root 21688 Sep 10 2014 killall
-rwxr-xr-x 1 root root 83432 Sep 4 2015 kmod
-rwxr-xr-x 1 root root 16944 Feb 18 2016 last
lrwxrwxrwx 1 root root 4 May 23 19:07 lastb -> last
-rwxr-xr-x 1 root root 14352 Jan 5 2012 lastlog
-rwxr-xr-x 1 root root 13368 Aug 26 2015 lchfn
-rwxr-xr-x 1 root root 11280 Aug 26 2015 lchsh
lrwxrwxrwx 1 root root 20 May 23 19:07 ld -> /etc/alternatives/ld
-rwxr-xr-x 1 root root 890216 Dec 8 2015 ld.bfd
-rwxr-xr-x 1 root root 5298 Nov 28 2018 ldd
-rwxr-xr-x 1 root root 3900128 Dec 8 2015 ld.gold
lrwxrwxrwx 1 root root 7 May 23 19:07 linux32 -> setarch
lrwxrwxrwx 1 root root 7 May 23 19:07 linux64 -> setarch
-rwxr-xr-x 1 root root 23520 Feb 19 2011 loadunimap
-rwxr-xr-x 1 root root 38680 Nov 29 2018 locale
-rwxr-xr-x 1 root root 322888 Nov 29 2018 localedef
-rwxr-xr-x 1 root root 21096 Apr 26 2017 logger
-rwxr-xr-x 1 root root 25312 Feb 25 2016 logname
-rwxr-xr-x 1 root root 10160 Apr 26 2017 look
-rwxr-xr-x 1 root root 4661 Dec 19 22:52 lprsetup.sh
-rwxr-xr-x 1 root root 53544 Apr 26 2017 lscpu
-rwxr-xr-x 1 root root 89624 Apr 26 2017 lsipc
-rwxr-xr-x 1 root root 34464 Apr 26 2017 lslocks
-rwxr-xr-x 1 root root 81544 Apr 26 2017 lslogins
-rwxr-xr-x 1 root root 68992 Apr 26 2017 lsns
-rwxr-xr-x 1 root root 13208 Sep 11 2014 lua
-rwxr-xr-x 1 root root 111664 Sep 11 2014 luac
-rwxr-xr-x 1 root root 174944 Jan 9 2015 make
-rwxr-xr-x 1 root root 19032 Nov 29 2018 makedb
-rwxr-xr-x 1 root root 16248 Feb 19 2011 mapscrn
-rwxr-xr-x 1 root root 12680 Apr 26 2017 mcookie
-rwxr-xr-x 1 root root 36800 Feb 25 2016 md5sum
-rwxr-xr-x 1 root root 6816 Feb 18 2016 mesg
-rwxr-xr-x 1 root root 57088 Feb 25 2016 mkfifo
-rwxr-xr-x 1 root root 131 Jan 6 2012 mkfontdir
-rwxr-xr-x 1 root root 30312 Jan 6 2012 mkfontscale
-rwxr-xr-x 1 root root 153000 Oct 23 2018 modutil
-rwxr-xr-x 1 root root 6056 Jun 22 2016 mogrify
-rwxr-xr-x 1 root root 6056 Jun 22 2016 montage
-rwxr-xr-x 1 root root 11136 Apr 26 2017 mountpoint
-rwxr-xr-x 1 root root 20960 Apr 26 2017 namei
lrwxrwxrwx 1 root root 55 May 23 19:07 native2ascii8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/native2ascii
-rwxr-xr-x 1 root root 271 Sep 10 2014 neqn
-rwxr-xr-x 1 root root 36768 Feb 25 2016 nl
-rwxr-xr-x 1 root root 41256 Dec 8 2015 nm
-rwxr-xr-x 1 root root 7159712 Oct 24 2016 node
-rwxr-xr-x 1 root root 29056 Feb 25 2016 nohup
-rwxr-xr-x 1 root root 28128 Feb 25 2016 nproc
-rwxr-xr-x 1 root root 3392 Sep 10 2014 nroff
-rwxr-xr-x 1 root root 23808 Apr 26 2017 nsenter
-rwxr-xr-x 1 root root 62400 Feb 25 2016 numfmt
-rwxr-xr-x 1 root root 216616 Dec 8 2015 objcopy
-rwxr-xr-x 1 root root 323512 Dec 8 2015 objdump
-rwxr-xr-x 1 root root 61984 Feb 25 2016 od
-rwxr-xr-x 1 root root 234512 Jan 17 2011 oldfind
lrwxrwxrwx 1 root root 6 May 23 19:07 open -> openvt
-rwxr-xr-x 1 root root 505192 Feb 28 2017 openssl
-rwxr-xr-x 1 root root 12976 Feb 19 2011 openvt
lrwxrwxrwx 1 root root 22 May 23 19:07 orbd -> /etc/alternatives/orbd
lrwxrwxrwx 1 root root 47 May 23 19:07 orbd7 -> //usr/lib/jvm/jre-1.7.0-openjdk.x86_64/bin/orbd
lrwxrwxrwx 1 root root 46 May 23 19:07 orbd8 -> /usr/lib/jvm/jre-1.8.0-openjdk.x86_64/bin/orbd
-rwxr-xr-x 1 root root 114536 Sep 10 2014 p11-kit
lrwxrwxrwx 1 root root 25 May 23 19:07 pack200 -> /etc/alternatives/pack200
lrwxrwxrwx 1 root root 50 May 23 19:07 pack2007 -> //usr/lib/jvm/jre-1.7.0-openjdk.x86_64/bin/pack200
lrwxrwxrwx 1 root root 49 May 23 19:07 pack2008 -> /usr/lib/jvm/jre-1.8.0-openjdk.x86_64/bin/pack200
-rwxr-xr-x 1 root root 11600 Feb 23 2017 pal2rgb
-rwxr-xr-x 1 root root 28672 Feb 25 2016 paste
-rwxr-xr-x 1 root root 143048 May 9 2018 patch
-rwxr-xr-x 1 root root 28064 Feb 25 2016 pathchk
-rwxr-xr-x 1 root root 696 Dec 19 22:52 pdf2dsc
-rwxr-xr-x 1 root root 901 Dec 19 22:52 pdf2ps
-rwxr-xr-x 1 root root 547 Dec 19 22:52 pdfopt
-rwxr-xr-x 1 root root 9584 Sep 10 2014 peekfd
-rwxr-xr-x 1 root root 7336 Mar 20 22:13 perl
-rwxr-xr-x 1 root root 7336 Mar 20 22:13 perl5.16.3
-rwxr-xr-x 1 root root 44351 Mar 20 22:13 perlbug
-rwxr-xr-x 1 root root 203 Sep 10 2014 perldoc
-rwxr-xr-x 1 root root 44351 Mar 20 22:13 perlthanks
-rwxr-xr-x 1 root root 495 Dec 19 22:52 pf2afm
-rwxr-xr-x 1 root root 511 Dec 19 22:52 pfbtopfa
-rwxr-xr-x 1 root root 375360 Oct 14 2012 pgawk
-rwxr-xr-x 1 root root 15872 Mar 17 2015 pgrep
-rwxr-xr-x 1 root root 173176 Sep 10 2014 pic
-rwxr-xr-x 1 root root 8177 Sep 12 2014 piconv
-rwxr-xr-x 1 root root 2135 Jan 5 2012 pinentry
-rwxr-xr-x 1 root root 45752 Jan 5 2012 pinentry-curses
-rwxr-xr-x 1 root root 32896 Feb 25 2016 pinky
-rwxr-xr-x 1 root root 90392 Oct 23 2018 pk12util
-rwxr-xr-x 1 root root 40128 Jul 12 2013 pkg-config
-rwxr-xr-x 1 root root 15872 Mar 17 2015 pkill
-rwxr-xr-x 1 root root 4531 Mar 20 22:13 pl2pm
-rwxr-xr-x 1 root root 14808 Nov 29 2018 pldd
-rwxr-xr-x 1 root root 12136 Mar 17 2015 pmap
-rwxr-xr-x 1 root root 4096 Mar 20 22:13 pod2html
-rwxr-xr-x 1 root root 13581 Sep 12 2014 pod2man
-rwxr-xr-x 1 root root 11004 Sep 12 2014 pod2text
-rwxr-xr-x 1 root root 3755 Sep 10 2014 pod2usage
lrwxrwxrwx 1 root root 28 May 23 19:07 policytool -> /etc/alternatives/policytool
lrwxrwxrwx 1 root root 53 May 23 19:07 policytool7 -> //usr/lib/jvm/jre-1.7.0-openjdk.x86_64/bin/policytool
lrwxrwxrwx 1 root root 52 May 23 19:07 policytool8 -> /usr/lib/jvm/jre-1.8.0-openjdk.x86_64/bin/policytool
-rwxr-xr-x 1 root root 178624 Sep 10 2014 post-grohtml
-rwxr-xr-x 1 root root 11296 Feb 23 2017 ppm2tiff
-rwxr-xr-x 1 root root 65984 Feb 25 2016 pr
-rwxr-xr-x 1 root root 40096 Sep 10 2014 preconv
-rwxr-xr-x 1 root root 81504 Sep 10 2014 pre-grohtml
-rwxr-xr-x 1 root root 386 Dec 19 22:52 printafm
-rwxr-xr-x 1 root root 25600 Feb 25 2016 printenv
-rwxr-xr-x 1 root root 48448 Feb 25 2016 printf
-rwxr-xr-x 1 root root 36736 Apr 26 2017 prlimit
-rwxr-xr-x 1 root root 13392 Sep 10 2014 prtstat
-rwxr-xr-x 1 root root 786 Dec 19 22:52 ps2ascii
-rwxr-xr-x 1 root root 2772 Dec 19 22:52 ps2epsi
-rwxr-xr-x 1 root root 315 Dec 19 22:52 ps2pdf
-rwxr-xr-x 1 root root 260 Dec 19 22:52 ps2pdf12
-rwxr-xr-x 1 root root 260 Dec 19 22:52 ps2pdf13
-rwxr-xr-x 1 root root 260 Dec 19 22:52 ps2pdf14
-rwxr-xr-x 1 root root 1088 Dec 19 22:52 ps2pdfwr
-rwxr-xr-x 1 root root 634 Dec 19 22:52 ps2ps
-rwxr-xr-x 1 root root 704 Dec 19 22:52 ps2ps2
-rwxr-xr-x 1 root root 53329 Mar 20 22:13 psed
lrwxrwxrwx 1 root root 9 May 23 19:07 psfaddtable -> psfxtable
lrwxrwxrwx 1 root root 9 May 23 19:07 psfgettable -> psfxtable
lrwxrwxrwx 1 root root 9 May 23 19:07 psfstriptable -> psfxtable
-rwxr-xr-x 1 root root 17432 Feb 19 2011 psfxtable
lrwxrwxrwx 1 root root 6 May 23 19:07 pstack -> gstack
-rwxr-xr-x 1 root root 23816 Sep 10 2014 pstree
lrwxrwxrwx 1 root root 6 May 23 19:07 pstree.x11 -> pstree
-rwxr-xr-x 1 root root 36607 Mar 20 22:13 pstruct
-rwxr-xr-x 1 root root 65696 Feb 25 2016 ptx
-rwxr-xr-x 1 root root 1420 Dec 19 22:52 pv.sh
-rwxr-xr-x 1 root root 6824 Mar 17 2015 pwdx
-rwxr-xr-x 1 root root 6856 Mar 3 2015 pwmake
-rwxr-xr-x 1 root root 7328 Mar 3 2015 pwscore
lrwxrwxrwx 1 root root 23 May 23 19:07 pydoc -> /etc/alternatives/pydoc
lrwxrwxrwx 1 root root 8 May 23 19:07 pydoc27 -> pydoc2.7
-rwxr-xr-x 1 root root 78 Sep 1 2016 pydoc2.7
lrwxrwxrwx 1 root root 24 May 23 19:07 pydoc3 -> /etc/alternatives/pydoc3
-rwxr-xr-x 1 root root 78 Sep 1 2016 pydoc3.4
lrwxrwxrwx 1 root root 24 May 23 19:07 python -> /etc/alternatives/python
-rwxr-xr-x 1 root root 5120 Sep 1 2016 python27
-rwxr-xr-x 1 root root 5120 Sep 1 2016 python2.7
lrwxrwxrwx 1 root root 25 May 23 19:07 python3 -> /etc/alternatives/python3
-rwxr-xr-x 1 root root 6864 Sep 1 2016 python34
-rwxr-xr-x 1 root root 6864 Sep 1 2016 python3.4
-rwxr-xr-x 1 root root 6864 Sep 1 2016 python3.4m
lrwxrwxrwx 1 root root 25 May 23 19:07 pyvenv3 -> /etc/alternatives/pyvenv3
-rwxr-xr-x 1 root root 230 Sep 1 2016 pyvenv3.4
-rwxr-xr-x 1 root root 56928 Dec 8 2015 ranlib
-rwxr-xr-x 1 root root 11296 Feb 23 2017 ras2tiff
-rwxr-xr-x 1 root root 16296 Feb 23 2017 raw2tiff
-rwxr-xr-x 1 root root 399016 Dec 8 2015 readelf
lrwxrwxrwx 1 root root 18 May 23 19:07 readlink -> ../../bin/readlink
-rwxr-xr-x 1 root root 56640 Feb 25 2016 realpath
-rwxr-xr-x 1 root root 1804 Sep 19 2006 rebuild-jar-repository
-rwxr-xr-x 1 root root 497 Sep 9 2014 rebuild-security-providers
-rwxr-xr-x 1 root root 9640 Apr 26 2017 rename
-rwxr-xr-x 1 root root 9040 Apr 26 2017 renice
lrwxrwxrwx 1 root root 4 May 23 19:07 reset -> tset
-rwxr-xr-x 1 root root 15264 Feb 19 2011 resizecons
-rwxr-xr-x 1 root root 8904 Apr 26 2017 rev
-rwxr-xr-x 1 root root 12360 Feb 23 2017 rgb2ycbcr
lrwxrwxrwx 1 root root 47 May 23 19:07 rmic8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/rmic
lrwxrwxrwx 1 root root 22 May 23 19:07 rmid -> /etc/alternatives/rmid
lrwxrwxrwx 1 root root 47 May 23 19:07 rmid7 -> //usr/lib/jvm/jre-1.7.0-openjdk.x86_64/bin/rmid
lrwxrwxrwx 1 root root 46 May 23 19:07 rmid8 -> /usr/lib/jvm/jre-1.8.0-openjdk.x86_64/bin/rmid
lrwxrwxrwx 1 root root 29 May 23 19:07 rmiregistry -> /etc/alternatives/rmiregistry
lrwxrwxrwx 1 root root 54 May 23 19:07 rmiregistry7 -> //usr/lib/jvm/jre-1.7.0-openjdk.x86_64/bin/rmiregistry
lrwxrwxrwx 1 root root 53 May 23 19:07 rmiregistry8 -> /usr/lib/jvm/jre-1.8.0-openjdk.x86_64/bin/rmiregistry
-rwxr-xr-x 1 root root 93080 Nov 29 2018 rpcgen
-rwxr-xr-x 1 root root 7792 Mar 20 2017 rpm2cpio
-rwxr-xr-x 1 root root 25912 Mar 20 2017 rpmbuild
-rwxr-xr-x 1 root root 11792 Mar 20 2017 rpmdb
-rwxr-xr-x 1 root root 11800 Mar 20 2017 rpmkeys
lrwxrwxrwx 1 root root 13 May 23 19:07 rpmquery -> ../../bin/rpm
-rwxr-xr-x 1 root root 12088 Mar 20 2017 rpmspec
lrwxrwxrwx 1 root root 13 May 23 19:07 rpmverify -> ../../bin/rpm
-rwxr-xr-x 1 root root 29952 Feb 25 2016 runcon
-rwxr-xr-x 1 root root 53329 Mar 20 22:13 s2p
lrwxrwxrwx 1 root root 52 May 23 19:07 schemagen8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/schemagen
-rwxr-xr-x 1 root root 15736 Apr 26 2017 script
-rwxr-xr-x 1 root root 11040 Apr 26 2017 scriptreplay
-rwxr-xr-x 1 root root 39496 Nov 27 2013 sctp_darn
-rwxr-xr-x 1 root root 19384 Nov 27 2013 sctp_status
-rwxr-xr-x 1 root root 28728 Nov 27 2013 sctp_test
-rwxr-xr-x 1 root root 45768 Aug 18 2015 sdiff
-rwxr-xr-x 1 root root 44576 Feb 25 2016 seq
lrwxrwxrwx 1 root root 52 May 23 19:07 serialver8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/serialver
lrwxrwxrwx 1 root root 28 May 23 19:07 servertool -> /etc/alternatives/servertool
lrwxrwxrwx 1 root root 53 May 23 19:07 servertool7 -> //usr/lib/jvm/jre-1.7.0-openjdk.x86_64/bin/servertool
lrwxrwxrwx 1 root root 52 May 23 19:07 servertool8 -> /usr/lib/jvm/jre-1.8.0-openjdk.x86_64/bin/servertool
-rwxr-xr-x 1 root root 12992 Apr 26 2017 setarch
-rwxr-xr-x 1 root root 7160 Feb 19 2011 setkeycodes
-rwxr-xr-x 1 root root 8952 Feb 19 2011 setleds
-rwxr-xr-x 1 root root 6864 Feb 19 2011 setmetamode
-rwxr-xr-x 1 root root 29264 Apr 26 2017 setpriv
-rwxr-xr-x 1 root root 8368 Apr 26 2017 setsid
-rwxr-xr-x 1 root root 27576 Apr 26 2017 setterm
lrwxrwxrwx 1 root root 19 May 23 19:07 setup-nsssysinit -> setup-nsssysinit.sh
-rwxr-xr-x 1 root root 1539 Oct 23 2018 setup-nsssysinit.sh
lrwxrwxrwx 1 root root 6 May 23 19:07 sg -> newgrp
-rwxr-xr-x 1 root root 36576 Feb 25 2016 sha1sum
-rwxr-xr-x 1 root root 36608 Feb 25 2016 sha224sum
-rwxr-xr-x 1 root root 36608 Feb 25 2016 sha256sum
-rwxr-xr-x 1 root root 36608 Feb 25 2016 sha384sum
-rwxr-xr-x 1 root root 36608 Feb 25 2016 sha512sum
-rwxr-xr-x 1 root root 15040 Feb 19 2011 showconsolefont
-rwxr-xr-x 1 root root 10888 Feb 19 2011 showkey
-rwxr-xr-x 1 root root 50048 Feb 25 2016 shred
-rwxr-xr-x 1 root root 46592 Feb 25 2016 shuf
-rwxr-xr-x 1 root root 168088 Oct 23 2018 signtool
-rwxr-xr-x 1 root root 89784 Oct 23 2018 signver
-rwxr-xr-x 1 root root 28088 Dec 8 2015 size
-rwxr-xr-x 1 root root 15192 Mar 17 2015 skill
-rwxr-xr-x 1 root root 13104 Mar 17 2015 slabtop
-rwxr-xr-x 1 root root 15192 Mar 17 2015 snice
-rwxr-xr-x 1 root root 27640 Sep 10 2014 soelim
-rwxr-xr-x 1 root root 4337 Nov 28 2018 sotruss
-rwxr-xr-x 1 root root 18459 Mar 20 22:13 splain
-rwxr-xr-x 1 root root 66016 Feb 25 2016 split
-rwxr-xr-x 1 root root 23152 Nov 29 2018 sprof
-rwxr-xr-x 1 root root 52920 Aug 28 2015 sqlite3
-rwxr-xr-x 1 root root 110072 Oct 23 2018 ssltap
-rwxr-xr-x 1 root root 69920 Feb 25 2016 stat
-rwxr-xr-x 1 root root 61888 Feb 25 2016 stdbuf
-rwxr-xr-x 1 root root 6056 Jun 22 2016 stream
-rwxr-xr-x 1 root root 25624 Dec 8 2015 strings
-rwxr-xr-x 1 root root 216616 Dec 8 2015 strip
-rwxr-xr-x 1 root root 34184 Feb 25 2016 sum
-rwxr-xr-x 1 root root 11248 Aug 17 2016 tabs
-rwxr-xr-x 1 root root 32320 Feb 25 2016 tac
-rwxr-xr-x 1 root root 61408 Feb 25 2016 tail
-rwxr-xr-x 1 root root 17824 Apr 26 2017 tailf
-rwxr-xr-x 1 root root 107224 Sep 10 2014 tbl
-rwxr-xr-x 1 root root 28128 Feb 25 2016 tee
-rwxr-xr-x 1 root root 33152 Feb 25 2016 test
-rwxr-xr-x 1 root root 15784 Feb 23 2017 thumbnail
-rwxr-xr-x 1 root root 49936 Aug 17 2016 tic
-rwxr-xr-x 1 root root 12504 Feb 23 2017 tiff2bw
-rwxr-xr-x 1 root root 64584 Feb 23 2017 tiff2pdf
-rwxr-xr-x 1 root root 49648 Feb 23 2017 tiff2ps
-rwxr-xr-x 1 root root 12368 Feb 23 2017 tiff2rgba
-rwxr-xr-x 1 root root 15288 Feb 23 2017 tiffcmp
-rwxr-xr-x 1 root root 33384 Feb 23 2017 tiffcp
-rwxr-xr-x 1 root root 99664 Feb 23 2017 tiffcrop
-rwxr-xr-x 1 root root 11280 Feb 23 2017 tiffdither
-rwxr-xr-x 1 root root 16800 Feb 23 2017 tiffdump
-rwxr-xr-x 1 root root 15448 Feb 23 2017 tiffinfo
-rwxr-xr-x 1 root root 16016 Feb 23 2017 tiffmedian
-rwxr-xr-x 1 root root 11072 Feb 23 2017 tiffset
-rwxr-xr-x 1 root root 11696 Feb 23 2017 tiffsplit
-rwxr-xr-x 1 root root 51144 Feb 25 2016 timeout
-rwxr-xr-x 1 root root 7920 Mar 17 2015 tload
lrwxrwxrwx 1 root root 27 May 23 19:07 tnameserv -> /etc/alternatives/tnameserv
lrwxrwxrwx 1 root root 52 May 23 19:07 tnameserv7 -> //usr/lib/jvm/jre-1.7.0-openjdk.x86_64/bin/tnameserv
lrwxrwxrwx 1 root root 51 May 23 19:07 tnameserv8 -> /usr/lib/jvm/jre-1.8.0-openjdk.x86_64/bin/tnameserv
-rwxr-xr-x 1 root root 11504 Aug 17 2016 toe
-rwxr-xr-x 1 root root 58400 Mar 17 2015 top
-rwxr-xr-x 1 root root 11656 Aug 17 2016 tput
-rwxr-xr-x 1 root root 41376 Feb 25 2016 tr
-rwxr-xr-x 1 root root 492184 Sep 10 2014 troff
-rwxr-xr-x 1 root root 52864 Feb 25 2016 truncate
-rwxr-xr-x 1 root root 17784 Aug 17 2016 tset
-rwxr-xr-x 1 root root 34304 Feb 25 2016 tsort
-rwxr-xr-x 1 root root 99072 Jan 15 2011 ttmkfdir
-rwxr-xr-x 1 root root 25184 Feb 25 2016 tty
-rwxr-xr-x 1 root root 7335 Nov 28 2018 tzselect
-rwxr-xr-x 1 root root 18208 Jan 6 2012 ucs2any
-rwxr-xr-x 1 root root 16624 Apr 26 2017 ul
-rwxr-xr-x 1 root root 32320 Feb 25 2016 unexpand
-rwxr-xr-x 1 root root 40832 Feb 25 2016 uniq
-rwxr-xr-x 1 root root 4206 Dec 19 22:52 unix-lpr.sh
lrwxrwxrwx 1 root root 27 May 23 19:07 unpack200 -> /etc/alternatives/unpack200
lrwxrwxrwx 1 root root 52 May 23 19:07 unpack2007 -> //usr/lib/jvm/jre-1.7.0-openjdk.x86_64/bin/unpack200
lrwxrwxrwx 1 root root 51 May 23 19:07 unpack2008 -> /usr/lib/jvm/jre-1.8.0-openjdk.x86_64/bin/unpack200
-rwxr-xr-x 1 root root 14128 Apr 26 2017 unshare
lrwxrwxrwx 1 root root 2 May 23 19:07 unxz -> xz
-rwxr-xr-x 1 root root 179496 Aug 17 2016 unzip
-rwxr-xr-x 1 root root 85192 Aug 17 2016 unzipsfx
-rwxr-xr-x 1 root root 8743 Mar 19 16:22 update-ca-trust
-rwxr-xr-x 1 root root 45920 Aug 18 2016 update-mime-database
-rwxr-xr-x 1 root root 5008 Mar 17 2015 uptime
lrwxrwxrwx 1 root root 28 May 23 19:07 urlgrabber -> /etc/alternatives/urlgrabber
-rwxr-xr-x 1 root root 12468 Mar 20 2017 urlgrabber-2.7
-rwxr-xr-x 1 root root 28064 Feb 25 2016 users
-rwxr-xr-x 1 root root 13168 Apr 26 2017 utmpdump
-rwxr-xr-x 1 root root 8224 Apr 26 2017 uuidgen
-rwxr-xr-x 1 root root 113440 Feb 25 2016 vdir
-rwxr-xr-x 1 root root 23352 Mar 17 2015 vmstat
-rwxr-xr-x 1 root root 11256 Mar 17 2015 w
-rwxr-xr-x 1 root root 12688 Mar 17 2015 watch
-rwxr-xr-x 1 root root 11048 Aug 24 2018 watchgnupg
-rwxr-xr-x 1 root root 36576 Feb 25 2016 wc
-rwxr-xr-x 1 root root 34432 Apr 26 2017 wdctl
-rwxr-xr-x 1 root root 284 Dec 19 22:52 wftopfa
-rwxr-xr-x 1 root root 19936 Apr 26 2017 whereis
-rwxr-xr-x 1 root root 20768 Jan 5 2012 which
-rwxr-xr-x 1 root root 49152 Feb 25 2016 who
-rwxr-xr-x 1 root root 25536 Feb 25 2016 whoami
-rwxr-xr-x 1 root root 227 Nov 27 2013 withsctp
lrwxrwxrwx 1 root root 48 May 23 19:07 wsgen8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/wsgen
lrwxrwxrwx 1 root root 51 May 23 19:07 wsimport8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/wsimport
lrwxrwxrwx 1 root root 7 May 23 19:07 x86_64 -> setarch
-rwxr-xr-x 1 root root 44024 Jan 17 2011 xargs
lrwxrwxrwx 1 root root 46 May 23 19:07 xjc8 -> /usr/lib/jvm/java-1.8.0-openjdk.x86_64/bin/xjc
-rwxr-xr-x 1 root root 15256 Aug 23 2018 xmlcatalog
-rwxr-xr-x 1 root root 60416 Aug 23 2018 xmllint
-rwxr-xr-x 1 root root 22392 Dec 7 2016 xmlwf
-rwxr-xr-x 1 root root 23624 Mar 4 2015 xsltproc
-rwxr-xr-x 1 root root 69288 Feb 19 2016 xz
lrwxrwxrwx 1 root root 2 May 23 19:07 xzcat -> xz
lrwxrwxrwx 1 root root 6 May 23 19:07 xzcmp -> xzdiff
-rwxr-xr-x 1 root root 9896 Feb 19 2016 xzdec
-rwxr-xr-x 1 root root 5516 Feb 19 2016 xzdiff
lrwxrwxrwx 1 root root 6 May 23 19:07 xzegrep -> xzgrep
lrwxrwxrwx 1 root root 6 May 23 19:07 xzfgrep -> xzgrep
-rwxr-xr-x 1 root root 5607 Feb 19 2016 xzgrep
-rwxr-xr-x 1 root root 1807 Feb 19 2016 xzless
-rwxr-xr-x 1 root root 2166 Feb 19 2016 xzmore
-rwxr-xr-x 1 root root 25440 Feb 25 2016 yes
-rwxr-xr-x 1 root root 804 Aug 10 2017 yum
lrwxrwxrwx 1 root root 14 May 23 19:07 zcat -> ../../bin/zcat
-rwxr-xr-x 1 root root 1760 Feb 24 2016 zcmp
-rwxr-xr-x 1 root root 5768 Feb 24 2016 zdiff
-rwxr-xr-x 1 root root 123 Feb 24 2016 zegrep
-rwxr-xr-x 1 root root 123 Feb 24 2016 zfgrep
-rwxr-xr-x 1 root root 2140 Feb 24 2016 zforce
-rwxr-xr-x 1 root root 5916 Feb 24 2016 zgrep
-rwxr-xr-x 1 root root 2953 Oct 10 2008 zipgrep
-rwxr-xr-x 1 root root 179496 Aug 17 2016 zipinfo
-rwxr-xr-x 1 root root 2041 Feb 24 2016 zless
-rwxr-xr-x 1 root root 2859 Feb 24 2016 zmore
-rwxr-xr-x 1 root root 5343 Feb 24 2016 znew
lrwxrwxrwx 1 root root 6 May 23 19:07 zsoelim -> soelim
```

### nodejs10.x /usr/bin
```
ls -l /usr/bin
-rwxr-xr-x 1 root root 29 Jul 27 2018 alias
-rwxr-xr-x 1 root root 28872 Jul 31 2018 arch
lrwxrwxrwx 1 root root 4 May 23 19:08 awk -> gawk
-rwxr-xr-x 1 root root 37240 Jul 31 2018 base64
-rwxr-xr-x 1 root root 28904 Jul 31 2018 basename
-rwxr-xr-x 1 root root 964728 Jul 27 2018 bash
lrwxrwxrwx 1 root root 10 May 23 19:08 bashbug -> bashbug-64
-rwxr-xr-x 1 root root 6958 Jul 27 2018 bashbug-64
-rwxr-xr-x 1 root root 26 Jul 27 2018 bg
-rwxr-xr-x 1 root root 1638 Jul 27 2018 ca-legacy
lrwxrwxrwx 1 root root 3 May 23 19:08 captoinfo -> tic
-rwxr-xr-x 1 root root 49888 Jul 31 2018 cat
-rwxr-xr-x 1 root root 3283 Jan 4 18:10 catchsegv
-rwxr-xr-x 1 root root 26 Jul 27 2018 cd
-rwxr-xr-x 1 root root 62840 Jul 31 2018 chcon
-rwxr-xr-x 1 root root 58600 Jul 31 2018 chgrp
-rwxr-xr-x 1 root root 58472 Jul 31 2018 chmod
-rwxr-xr-x 1 root root 62744 Jul 31 2018 chown
-rwxr-xr-x 1 root root 33032 Jul 31 2018 cksum
-rwxr-xr-x 1 root root 11360 Aug 31 2018 clear
-rwxr-xr-x 1 root root 37296 Jul 31 2018 comm
-rwxr-xr-x 1 root root 31 Jul 27 2018 command
-rwxr-xr-x 1 root root 150968 Jul 31 2018 cp
-rwxr-xr-x 1 root root 45744 Jul 31 2018 csplit
-rwxr-xr-x 1 root root 41464 Jul 31 2018 cut
-rwxr-xr-x 1 root root 62072 Jul 31 2018 date
-rwxr-xr-x 1 root root 74792 Jul 31 2018 dd
-rwxr-xr-x 1 root root 100800 Jul 31 2018 df
-rwxr-xr-x 1 root root 513944 Jul 31 2018 dgawk
-rwxr-xr-x 1 root root 113376 Jul 31 2018 dir
-rwxr-xr-x 1 root root 41304 Jul 31 2018 dircolors
-rwxr-xr-x 1 root root 28864 Jul 31 2018 dirname
-rwxr-xr-x 1 root root 108752 Jul 31 2018 du
-rwxr-xr-x 1 root root 28848 Jul 31 2018 echo
-rwxr-xr-x 1 root root 290 Jul 31 2018 egrep
-rwxr-xr-x 1 root root 28880 Jul 31 2018 env
-rwxr-xr-x 1 root root 33152 Jul 31 2018 expand
-rwxr-xr-x 1 root root 37272 Jul 31 2018 expr
-rwxr-xr-x 1 root root 95424 Jul 31 2018 factor
-rwxr-xr-x 1 root root 28808 Jul 31 2018 false
-rwxr-xr-x 1 root root 26 Jul 27 2018 fc
-rwxr-xr-x 1 root root 26 Jul 27 2018 fg
-rwxr-xr-x 1 root root 290 Jul 31 2018 fgrep
-rwxr-xr-x 1 root root 37264 Jul 31 2018 fmt
-rwxr-xr-x 1 root root 33120 Jul 31 2018 fold
-rwxr-xr-x 1 root root 432504 Jul 31 2018 gawk
-rwxr-xr-x 1 root root 23072 Jan 4 18:16 gencat
-rwxr-xr-x 1 root root 22792 Jan 4 18:16 getconf
-rwxr-xr-x 1 root root 27904 Jan 4 18:16 getent
-rwxr-xr-x 1 root root 31 Jul 27 2018 getopts
-rwxr-xr-x 1 root root 158864 Jul 31 2018 grep
-rwxr-xr-x 1 root root 33072 Jul 31 2018 groups
-rwxr-xr-x 1 root root 37256 Jul 31 2018 head
-rwxr-xr-x 1 root root 28864 Jul 31 2018 hostid
-rwxr-xr-x 1 root root 56224 Jan 4 18:16 iconv
-rwxr-xr-x 1 root root 37272 Jul 31 2018 id
-rwxr-xr-x 1 root root 3188 Jul 31 2018 igawk
-rwxr-xr-x 1 root root 271528 Jul 27 2018 info
-rwxr-xr-x 1 root root 61360 Aug 31 2018 infocmp
-rwxr-xr-x 1 root root 21880 Jul 27 2018 infokey
lrwxrwxrwx 1 root root 3 May 23 19:08 infotocap -> tic
-rwxr-xr-x 1 root root 142792 Jul 31 2018 install
-rwxr-xr-x 1 root root 28 Jul 27 2018 jobs
-rwxr-xr-x 1 root root 45728 Jul 31 2018 join
-rwxr-xr-x 1 root root 5441 Jan 4 18:10 ldd
-rwxr-xr-x 1 root root 28856 Jul 31 2018 link
-rwxr-xr-x 1 root root 54360 Jul 31 2018 ln
-rwxr-xr-x 1 root root 38720 Jan 4 18:16 locale
-rwxr-xr-x 1 root root 306840 Jan 4 18:16 localedef
-rwxr-xr-x 1 root root 28848 Jul 31 2018 logname
-rwxr-xr-x 1 root root 113384 Jul 31 2018 ls
-rwxr-xr-x 1 root root 19040 Jan 4 18:16 makedb
-rwxr-xr-x 1 root root 41424 Jul 31 2018 md5sum
-rwxr-xr-x 1 root root 79680 Jul 31 2018 mkdir
-rwxr-xr-x 1 root root 62968 Jul 31 2018 mkfifo
-rwxr-xr-x 1 root root 62968 Jul 31 2018 mknod
-rwxr-xr-x 1 root root 37400 Jul 31 2018 mktemp
-rwxr-xr-x 1 root root 130216 Jul 31 2018 mv
-rwxr-xr-x 1 root root 32968 Jul 31 2018 nice
-rwxr-xr-x 1 root root 41456 Jul 31 2018 nl
-rwxr-xr-x 1 root root 33104 Jul 31 2018 nohup
-rwxr-xr-x 1 root root 33032 Jul 31 2018 nproc
-rwxr-xr-x 1 root root 66168 Jul 31 2018 numfmt
-rwxr-xr-x 1 root root 66280 Jul 31 2018 od
-rwxr-xr-x 1 root root 32848 Jul 31 2018 p11-kit
-rwxr-xr-x 1 root root 33008 Jul 31 2018 paste
-rwxr-xr-x 1 root root 28880 Jul 31 2018 pathchk
-rwxr-xr-x 1 root root 432536 Jul 31 2018 pgawk
-rwxr-xr-x 1 root root 37360 Jul 31 2018 pinky
-rwxr-xr-x 1 root root 14816 Jan 4 18:16 pldd
-rwxr-xr-x 1 root root 70672 Jul 31 2018 pr
-rwxr-xr-x 1 root root 28848 Jul 31 2018 printenv
-rwxr-xr-x 1 root root 49632 Jul 31 2018 printf
-rwxr-xr-x 1 root root 66544 Jul 31 2018 ptx
-rwxr-xr-x 1 root root 33112 Jul 31 2018 pwd
-rwxr-xr-x 1 root root 28 Jul 27 2018 read
-rwxr-xr-x 1 root root 41704 Jul 31 2018 readlink
-rwxr-xr-x 1 root root 62608 Jul 31 2018 realpath
lrwxrwxrwx 1 root root 4 May 23 19:08 reset -> tset
-rwxr-xr-x 1 root root 62768 Jul 31 2018 rm
-rwxr-xr-x 1 root root 41320 Jul 31 2018 rmdir
-rwxr-xr-x 1 root root 84840 Jan 4 18:16 rpcgen
-rwxr-xr-x 1 root root 33120 Jul 31 2018 runcon
-rwxr-xr-x 1 root root 75960 Aug 1 2018 sed
-rwxr-xr-x 1 root root 49552 Jul 31 2018 seq
lrwxrwxrwx 1 root root 4 May 23 19:08 sh -> bash
-rwxr-xr-x 1 root root 37368 Jul 31 2018 sha1sum
-rwxr-xr-x 1 root root 37384 Jul 31 2018 sha224sum
-rwxr-xr-x 1 root root 37384 Jul 31 2018 sha256sum
-rwxr-xr-x 1 root root 37400 Jul 31 2018 sha384sum
-rwxr-xr-x 1 root root 37400 Jul 31 2018 sha512sum
-rwxr-xr-x 1 root root 54104 Jul 31 2018 shred
-rwxr-xr-x 1 root root 50216 Jul 31 2018 shuf
-rwxr-xr-x 1 root root 28952 Jul 31 2018 sleep
-rwxr-xr-x 1 root root 117568 Jul 31 2018 sort
-rwxr-xr-x 1 root root 4281 Jan 4 18:10 sotruss
-rwxr-xr-x 1 root root 66968 Jul 31 2018 split
-rwxr-xr-x 1 root root 23160 Jan 4 18:16 sprof
-rwxr-xr-x 1 root root 74784 Jul 31 2018 stat
-rwxr-xr-x 1 root root 66344 Jul 31 2018 stdbuf
-rwxr-xr-x 1 root root 66080 Jul 31 2018 stty
-rwxr-xr-x 1 root root 37320 Jul 31 2018 sum
-rwxr-xr-x 1 root root 28856 Jul 31 2018 sync
-rwxr-xr-x 1 root root 15632 Aug 31 2018 tabs
-rwxr-xr-x 1 root root 33136 Jul 31 2018 tac
-rwxr-xr-x 1 root root 62560 Jul 31 2018 tail
-rwxr-xr-x 1 root root 33080 Jul 31 2018 tee
-rwxr-xr-x 1 root root 37200 Jul 31 2018 test
-rwxr-xr-x 1 root root 78200 Aug 31 2018 tic
-rwxr-xr-x 1 root root 54504 Jul 31 2018 timeout
-rwxr-xr-x 1 root root 15696 Aug 31 2018 toe
-rwxr-xr-x 1 root root 58272 Jul 31 2018 touch
-rwxr-xr-x 1 root root 20072 Aug 31 2018 tput
-rwxr-xr-x 1 root root 45552 Jul 31 2018 tr
-rwxr-xr-x 1 root root 28808 Jul 31 2018 true
-rwxr-xr-x 1 root root 53848 Jul 31 2018 truncate
-rwxr-xr-x 1 root root 179144 Jul 31 2018 trust
-rwxr-xr-x 1 root root 24192 Aug 31 2018 tset
-rwxr-xr-x 1 root root 33128 Jul 31 2018 tsort
-rwxr-xr-x 1 root root 28872 Jul 31 2018 tty
-rwxr-xr-x 1 root root 15370 Jan 4 18:09 tzselect
-rwxr-xr-x 1 root root 29 Jul 27 2018 umask
-rwxr-xr-x 1 root root 31 Jul 27 2018 unalias
-rwxr-xr-x 1 root root 28864 Jul 31 2018 uname
-rwxr-xr-x 1 root root 33128 Jul 31 2018 unexpand
-rwxr-xr-x 1 root root 41552 Jul 31 2018 uniq
-rwxr-xr-x 1 root root 28856 Jul 31 2018 unlink
-rwxr-xr-x 1 root root 1054 Jul 27 2018 update-ca-trust
-rwxr-xr-x 1 root root 28976 Jul 31 2018 users
-rwxr-xr-x 1 root root 113384 Jul 31 2018 vdir
-rwxr-xr-x 1 root root 28 Jul 27 2018 wait
-rwxr-xr-x 1 root root 37424 Jul 31 2018 wc
-rwxr-xr-x 1 root root 49760 Jul 31 2018 who
-rwxr-xr-x 1 root root 28904 Jul 31 2018 whoami
-rwxr-xr-x 1 root root 28856 Jul 31 2018 yes
```

