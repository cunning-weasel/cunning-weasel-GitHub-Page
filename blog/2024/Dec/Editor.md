## I've Just Gone Down the Editor Rabbit Hole

And I'm not entirely sure I like what I've become... I've caught a bad case of emacs.

I haven't really had any issues with vscode for the time that I've used it. It's not particularly fast, but that's never been an issue for me. A couple of seconds to load up a big project isn't ideal, but it's whatever right? Always a good time to roll a cig, refill the mug, or do whatever. It's an electron app anyway. Certainly faster than the hideous monstrosity that is Visual Studio, but meh.

So I mean look. vscode was ok for the workflow I had. Some random frontend and backend that I usually ran in two terminal windows, with a third terminal window for committing, switching branches, ssh-ing into a server, whatever. 

I'd have the terminal open on the server tab with logs running, vscode for code editing, and a browser open on the frontend or backend swagger docs or both. No issue, worked well across c# and js and across pretty much any stack.vscode's LSP, although annoying, works great in this use-case too.

I noticed things start to go south once I started to get deep in writing out the platform layers and engine of my game in c. Things got very dark at this point, folks. vscode started to slow down a great deal, with it's various LSPs confusing the hell out of it. Type hints broke left and right when programming against win32 and linux. I spent close to four days trying to debug an issue with init on the DirectSound api, only to find vscode kept incorectly trying to push me to use vtables.
It was one of the few times the LSP features of vscode became utterly and completly useless to me. Up to today, I still can't get vscode to recognise that I'm compiling a single translation unit or two. It just doesn't get it. Red squiggly lines everywhere that can only be solved by adding yet another config .json to silence said errors. I have no idea why, for instance, that on a linux environment, with all necessary dev tooling installed, that params for `mmap` still aren't recognized.

As if that wasn’t bad enough, it feels like every shitty-ass keystroke triggers a popup of suggested code completions — which as you've undoubtably guessed by now - all garbage. I won’t even get into the endless prompts for extension-upgrades, prompts to add even more extensions, update prompts, prompts to tell you said updates failed, you name it. Madness bruv.

I'm a simple man. I compile all my c code with a `build.bat` or `build.sh` script. Studpidly simple and fast, and so my resultant workflow looks something like: execute build script to compile, check compiler output/errors, jump into vscode to find and fix errors, then re-compile and run with debugger.

This workflow slowed down considerably when jumping around source code files. I even often found myself quickly editng source code in micro - as at least this way I could quickly bring up some code, edit, and hop out back to terminal. This is bound to leave a sour taste in anyone's mouth, given the repetitivness of this worklow. Needing to jump out to another tool for quick editing is something I wanted to have built-in to my editor from the jump. 

And this terminal output also starts to become harder to read, depending on compiler flags, and can include everything from errors in the win32 and linux header files themselves, to one's own code.
Sure, I could tweak configs, use Fish, or switch to Zsh for prettier output - but I didn't want extra dependencies and configs. Outside of aesthetics, these kinds of tweaks simply didn't bring any *real* value to my workflow. If anything, it just means more shit that needs to work across operating systems, and a bigger surface area of said shit to hit the fan. 

Based on the above, my requirements start to look very simple. I ended up on one of either neovim or some other text editor I would have to wrangle to get to work to my needs. My pain points needed to be solved as directly and efficiently as possible:

1. **Improve terminal workflow.**
2. **Improve source code editing & nav.**
3. **Be as 'turn-key' as possible, without bloat.**
   3.a?) This is more a side-note rant than it is an actual point and maybe I'm getting old but I just want my editor, a simple config, gimme any random shitty c compiler and get the hell off my front porch.

At this point, I think it makes sense to quickly clarify what disqualified the 'vi'-m family for me, and sadly for vim fans, it wasn't the learning curve. See, neovim as a starting point is a must for just about anybody looking to change their workflow against requirements in any way similar to mine. I don't mind a bit of tinkering to get my tooling right, but what really didn't float my boat was the *need* for that additional tooling i.e tmux to name but just one. I mean, neovim is an entire IDE build around a fat stack of tools. It's like the terminal version of vscode.
I get a special kind of headache everytime I think about the surface area of the shit-fan-target inevitably growing in size. Adding neovim to the mix would be the equivalent of adding a monkey, to throw said shit at a fan, blindfolded in a white room, and on cocaine.

And so, of the endless text editors I had tried, every single one of them required me to strip them of their default features, and usually needing to add so many custom ones that I realized, after having put off emacs for 3rd or 4th time, that I was *essentially* trying to turn every other editor I was using into a *simpler, shittier* version of emacs. Just not in actual emacs. It wasn't until my discovery of emacs - nothing from vim to neovim, helix, howl, geany, lite, scite or cudatext - had come so close to being so perfect right out of the gate with as little config (at the end of article) as this ancient, absolute beast of an editor/ide.

It boils down to what I consider the 2 killer features of emacs. Out of the box, emacs provides (1) `compilation-mode` and (2) `dired`, which are by themselves complete game-changers if you've never used tools like them.

Within a few keystrokes I can run `.bat` or `.sh` build scripts directly from a buffer I quickly brought up, view compiler errors ***with syntax highlighting(!)*** and then ***just jump to the corresponding lines instantly*** by navigating there with the keys. Add to that quick nav of files, buffers manipulation, multiple windows. Emacs, rather than replace the traditional terminal workflow, organically enhances it in ways that just make sense.
Although I still tend to use the eshell for git ops, magit looks like it'll be the (3)rd killer feature to add to the list, once I learn it and get it into my daily workflow. But again, it's the way emacs does it. Just too damn swaggy. Rizz off the charts. Stealing aura left and right fr fr. 

I've seen the (e)light, and speaking of which, have found emacs to be ***blazingly*** fast, again, across windows, wsl2 and linux. I had heard faint whispers of the it being slow prior to using it myself, but never actually expected it to be as snappy as it is - although there should be no surpise there given at it's core is a c engine. Might also be my lightweight config - which I shall share now without fruther ado:

```
(tool-bar-mode 0)
(menu-bar-mode 0)
(scroll-bar-mode 0)
(column-number-mode 1)
(global-display-line-numbers-mode)
(setq display-line-numbers-type 'relative)
(add-hook 'c-mode-common-hook
          (lambda ()
            (c-set-style "bsd")      
            (setq c-basic-offset 4)   
            (electric-indent-mode -1) 
            (c-set-offset 'substatement-open 0) 
            (c-set-offset 'case-label '+)       
            (c-set-offset 'statement-case-intro '+)
            (local-set-key (kbd "RET") 'newline)))
(use-package delsel
  :ensure nil 
  :hook (after-init . delete-selection-mode))
(setq dired-listing-switches "-alh")
(require 'dired-x)
(load-theme 'gruber-darker t)
```

If there was one thing I would have to say about emacs, it could be succinctly summed up by my inital requirement. If an 'emacs-lite' came out tomorrow, offering all of the things emacs offers, out of the box, needing only that 21 LoC of config - and left out 99% of the features of emacs I don't actually use - I would switch in a heartbeat.