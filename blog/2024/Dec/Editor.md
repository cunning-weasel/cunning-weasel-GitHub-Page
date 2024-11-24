## I've Just Gone Down the Editor Rabbit Hole

And I'm not entirely sure I like what I've become... I've caught a bad case of Emacs.

I haven't really had any issues with VSCode for the time that I've used it. It's not particularly fast, but that's never been an issue for me. A couple of seconds to load up a big project isn't ideal, but it's whatever right? Always a good time to roll a cig, refill the mug, or do whatever. It's an Electron app anyway. Certainly faster than the hideous monstrosity that is Visual Studio, but meh.

So I mean look. VSCode was ok for the workflow I had. Some random frontend and backend that I usually ran in two terminal windows, with a third terminal window for committing, switching branches, SSH-ing into a server, whatever. 

I'd have the terminal open on the server tab with logs running, VSCode for code editing, and a browser open on the frontend or backend swagger docs or both. No issue, worked well across C# and JS and across pretty much any stack. VSCode's LSP, although annoying, works great in this use-case too.

I noticed things start to go south once I began writing out the platform layers and engine of my game. Things got very dark at this point, folks. VSCode started to slow down a great deal, with it's various LSPs confusing the hell out of it.
Type hints broke left and right when programming against the win32 apis in pure c, let alone against the linux apis. There's a nasty tendancy for everything to default to C++. The editor insists on things like going through virtual tables and other C++ garbage I don't care to understand.

I spent close to four days trying to debug an issue with init on the DirectSound api, only to find VSCode kept incorectly interpreting my code as C++. It was one of the few times the LSP features of vscode became utterly and completly useless to me. Up to today, I still can't get vscode to recognise that I'm compiling a single translation unit or two. It just doesn't get it. Red squiggly lines everywhere that can only be solved by adding yet another config .json to silence said errors. I have no idea why, for instance, that on a linux environment, with all necessary header files, that params for `mmap` just aren't recognized.

As if that wasn’t bad enough, it feels like every shitty-ass keystroke triggers a popup of suggested code completions — which as you've undoubtably guessed by now - all garbage. I won’t even get into the endless prompts for extension-upgrades, prompts to add even more extensions, update prompts, prompts to tell you said updates failed, you name it. It's madness bruv.

As you may know, I'm a simple man. I compile all my c code with a simple `build.bat` or `build.sh` script. It keeps shit studpidly simple and fast, and so my resultant workflow looks something like:

- Execute build script to compile.
- Check compiler output/errors.
- Jump into vscode to find and fix errors.
- Re-compile and run with debugger.

This workflow slowed down considerably when jumping around source code files. I often found myself quickly editng source code in micro or nano - as at least this way I could quickly bring up some code, edit, and hop out back to terminal.

But this terminal output also started to become harder to read. Sure, I could tweak configs, use Fish, or switch to Zsh for prettier output, but I didn't want extra dependencies. Outside of aesthetics, these kinds of teaks simply didn't bring any real value to my workflow. If anything, it just means more shit that needs to work across platforms and a bigger surface area of failure.

Based on the above, my requirements start to look very simple. I ended up on one of either neovim or emacs. My pain points needed to be solved as directly and efficiently as possible:

1. **Improve my terminal workflow.**
2. **Improve source code editing and navigation.**
3. **Be as complete as possible, out-of-the-box.**
4. **Maybe I'm getting old, but just gimme my editor, gimme my compiler and stay tf out my way!**

At this point, I think it makes sense to quickly clarify what disqualified the vim family for me.The first issue with vim wasn’t even the learning curve. Neovim as a starting point almost felt like a must, as vanilla didn’t tick my boxes. But what really didn't float my boat is the NEED for additional tooling like tmux to name but just one.
I mean, neovim is an entire IDE build around a stack of tools. It's like the terminal version of  visual studio. 

Of the endless text editors I had tried (and I must have tried no less than 10 to this point), I had put off emacs probably 3 or 4 times before I finally decided to give it a go, and from the outset it completely blew my mind. Here's why. 

1. **Built-in Terminal Integration:** - without ever leaving emacs. 
2. **Motions:** - keybindings with a 60% keyboard, are actually more efficient than vim for total-keystrokes made vs what you achieve. 
3. **Mini Config:** - my `.emacs` file is just 10 LoC across win32, wsl2 and linux.

Out of the box, emacs provides features like `compilation-mode` and `dired` that completely changed my workflow to where I just can't see myself going back from:

- Within a few keystrokes I can run `.bat` or `.sh` scripts directly from emacs.
- View compiler errors, with syntax highlighting, and jump to the corresponding lines instantly.
- Navigate files, buffers, and multiple windows seemlessly, and extreemly quickly.

I no longer needed to open a separate terminal. Jumping around between compilation mode, dired file navigation, being able to jump quickly in and out of code for edits, or open up a new window/ buffer for those longer, grueling programming-sessions - it all works incredibly well. Even git ops. I tend to use the eshell for this, but something like magit could effortlessly be added and orgrnically add a ton of value to my workflow. 

So, I've seen the light. Looking alone at what it provides out of the box - compilation mode, dired - it's astonishing to me, and I simply haven't been able to replicate that workflow and process across any other text/terminal editor or IDE, and with as little as a 10 LoC config file to boot, out of the gate, that does it quite like emacs does it.

A last, delightful suprize that occured to me. Maybe it's my tiny config and needs. But emacs is actually incredibly fast. There is no comparison to vscode, and I honestly don't think the vim fam is any quicker. Emacs is fast. Initial launch time on windows is quite bad, but its still a lot faster than vscode - and I must admit I'd have only noticed it because the linux versions of emacs launch in a split second.

Yet, if there was anything neagative I would have to say about emacs, it could be succinctly summed up by my inital requirement. If an 'emacs-lite' came out tomorrow, offering all of the things emacs offers, out of the box, needing only 10 LoC of config - and left out 99% of the features of emacs I don't actually use - I would switch in a heartbeat.