## I've Just Gone Down the Editor Rabbit Hole

And I'm not entirely sure I like what I've become... I've caught a bad case of emacs.

I haven't really had any issues with vscode for the time that I've used it. It's not particularly fast, but that's never been an issue for me. A couple of seconds to load up a big project isn't ideal, but it's whatever right? Always a good time to roll a cig, refill the mug, or do whatever. It's an electron app anyway. Certainly faster than the hideous monstrosity that is Visual Studio, but meh.

So I mean look. vscode was ok for the workflow I had. Some random frontend and backend that I usually ran in two terminal windows, with a third terminal window for committing, switching branches, ssh-ing into a server, whatever. 

I'd have the terminal open on the server tab with logs running, vscode for code editing, and a browser open on the frontend or backend swagger docs or both. No issue, worked well across c# and js and across pretty much any stack. vscode's LSPs, although annoying, are almost always a requirement when working in any framework on the frontend or back. Mostly useful, slighly annoying, whatever. Small, but growing pains. 

I noticed things start to go south once I started to get deep in writing out the platform layers and engine of my game in c. Things got very dark at this point, folks. vscode started to slow down a great deal, with it's various LSPs confusing the hell out of it. Type hints broke left and right when programming against win32 and linux. I spent close to four days trying to debug an issue with `init` on the `DirectSound` api, only to find vscode kept incorectly trying to push me to use vtables.

It was one of the few times the LSP features of vscode became utterly and completly useless to me. Up to today, I still can't get vscode to recognise that I'm compiling a single translation unit or two. It just doesn't get it. Red squiggly lines everywhere that can only be solved by adding ~yet another~ config .json to silence said errors. I have no idea why, for instance, that on a linux environment, with all necessary dev tooling installed, that params for `mmap` still aren't recognized.

As if that wasn’t bad enough, it feels like every shitty-ass keystroke triggers a popup of suggested code completions — which as you've undoubtably guessed by now - all garbage. I won’t even get into the endless prompts for extension-upgrades, prompts to add even more extensions, update prompts, prompts to tell you said updates failed, you name it. Said keystrokes even start to register slower the quicker you're jumping in and out of projects and header files. Madness bruv.

It mad coz I'm a simple man. I compile all my c code with a `build.bat` or `build.sh` script. Studpidly simple and fast, and so my resultant workflow looks something like: execute build script to compile, check compiler output/errors, jump into vscode to find and fix errors, then re-compile and step through with debugger.

This workflow slowed down considerably when jumping around source code files. I even often found myself quickly editing source code in micro - as at least this way I could quickly bring up some code, edit, and hop out back to terminal to resume said compile/ run-in-debugger workflow. 

But this build/compile terminal output also starts to become harder to read, depending on compiler flags - given the nature of systems development. So sure, I could tweak configs, use Fish, or switch to Zsh for prettier output - but I didn't want extra dependencies and configs. Outside of aesthetics, these kinds of tweaks simply didn't bring any *real* value to my workflow.

If anything, it just means more shit that needs to work across operating systems, and a bigger surface area of said shit to hit the fan. 

Based on the above, my requirements start to look very simple. I ended up on one of either neovim or some other text editor I would have to wrangle to get to work to my needs. My pain points needed to be solved as directly and efficiently as possible:

1. **Improve terminal workflow.**
2. **Improve source code editing & nav.**
3. **Be as 'turn-key' as possible, without bloat.**
   3.a?) This is more a side-note rant than it is an actual point and maybe I'm getting old but I just want my editor, a simple config, gimme any random shitty c compiler and get the hell off my front porch.

At this point, I think it makes sense to quickly clarify what disqualified the 'vi'-m family for me, and sadly for vim fans, it wasn't the learning curve. See, neovim as a starting point is a must for just about anybody looking to change their workflow against requirements in any way similar to mine. That's a problem. 

See, I don't mind a bit of tinkering to get my tooling right. I build my own pc's after all.B ut what really didn't float my boat was the *need* for that additional tooling i.e tmux to name but just one. I mean, neovim is an entire IDE build around a fat fuckin stack of tools. You should see the setup-guide. As in, a guide to get setup. It's impressive in so many ways.

I can't even imagine what it would take to go from 0 vim experience to creating a single custom nvim config robust enough to work across operating systems.

I get a special kind of headache everytime I think about the surface area of the shit-fan-target inevitably growing in size. Adding nvim to the mix would be the equivalent of adding a monkey, to throw said shit at fan, blindfolded in a white room with a small, constant stream of cocaine forcibly being pumped into it's nostrils.

I'm telling you folks, these things start to toe the line of insanity.

And so - to make a short story long - of the endless text editors I tried, every single one of them required me to:

1. Strip them of their default features, and
2. Require so many more custom features, extensions and packages

- that I came to the sudden, thunderous realization. After having put off emacs for 3rd or 4th time, what I was *essentially* trying to do was turn every other editor I was testing into a *simpler, shittier* version of emacs!

N.B Emacs users know, this is a waste of time, moreso, because regular emacs is shitty enough on it's own. I digress.

Lite wasn't good enough because although it was fast, it needed a lot of config to get to where it solved my pain 3 pain points above. It needed to be more like micro, at least with 'terminal-proximity', while having micro's actual key-board centric, quick code and tab navigation.
Lite also needed to be a bit more like scite, but both needed more minimal UIs. Scite needed micro's code-nav, window and terminal-proximity, but couldn't achive it without a heavy custom config. Howl, geany and cudatext all had similar limitations in my mind.

Helix, to me, like nvim (and unsurprizingly, like: rust, odin, zig, cpp, visual studio, codeblocks and kate) didn't interest me.
They expand with a lot of abstraction, extensions and packages - what I essentially needed at the core - vim, but again, more like micro, which in turn needed to be lightly extended, improve my core pain points and workflows, and work across the ~shitty~ win32 *and* linux with a minimal config, so as to achieve the same exact experience across platforms.

So once more into the fray, I looked at emacs more seriously, 29.0 available for win32 and a clean build from source for wsl2 and linux.

Love at first cramp from `C-x`.

I had found the church of emacs. No other editor and ide had come so close to being so perfect, right out of the gate, with as little config (reminder to steal said config at the end of the article ;)) as this ancient, absolute beast of an editor/ide did. And guys. It works the same * Across. All. Platforms. :D *

As you may see dear reader, I think I've explored the problem area enough to where I can quickly sum up what boils down to *the* two *killer* features of emacs. Out of the box, emacs provides (1) `compilation-mode` and (2) `dired`, and these are - ladies, everything in-between (and not!), and gentlemen - by themselves, complete game-*changers*.

Within a few keystrokes I can run `.bat` or `.sh` build scripts directly from a buffer of code I quickly brought up, view compiler errors ***with syntax highlighting(!)*** and then ***just jump to the corresponding lines instantly*** by navigating to to said error line and hitting return. Add to that quick nav of files and code (that are inherent in keyboard-based editors like emacs), buffer manipulation, multiple window management and more.

What I think it does, is that emacs, rather than replace the my workflow painpoints, organically solve and enhance the process in ways that make sense. Take for instance the use of common tools like `grep` or gdb. `M-x compile` to run `grep -rn 'inline'` and have this beautifully navigatable interface with dired. `gud-gdb` is the same linux gdb we all love to hate, but with just a bit of added extra functionality to jump to set breakpoints, jump between the code window and the debugger window. It's seamless. It improves tooling we already use and which is, quite often, already perfect - it just "blends" more into the workflow. Even looking at magit, it'll likely be the (3)rd killer feature to add to the list once I get it into my daily workflow too. Bruh, this is how emacs rolls. The actual value-add to the tooling and emacs-ethos is proper insane. 

I've seen the (e)light, (and speaking of which), have found emacs to be ***blazingly*** fast, across windows, wsl2 and linux. Don't know if it was just haters, but I'd read faint whispers and old tales of it being slow, prior to using emacs myself.

Folks, it's snappy AF - although there should be no surpise there given at it's core is a c  renderer, similarly to lite btw - which is stupid fast. A large part of why emacs is so fast on my systems, to be real with you though, is my config.

As mentioned, I really didn't need much with an ide/ editor, in so much as to address my pains points across win32 and linux. So having a lighter config really was a side-quest but an achievement nonetheless, as it's extreemly light. It doesn't such up a ton of app startup time and resources, it works across platforms and removes just enough default behaviour, while adding just enough custom in such a minimalistic, simple and reproductable way, that there really is no turning back for me, especially in regards to writing low-level c code like I love to. And so, without further ado, I shall share now my glorious config file, for your pleasure dear reader:

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

Now obviously, do bare in mind that your mileage will vary, depending on the kinds of projects you work on. As a rule of thumb, I only program in c in emacs, and tend to switch to vscode and old terminal combo when I worked on web apps (c#, svelte, react, node.js and the whole crew).

For better or worse, dynamic lanugages still need lsp, extensions and tooling to really even support things like linting and hints for tailwind, or .astro extension files. It's a different mindset, and I don't mind being agnostic to either. I am, now and forever, however, an emacs convert who, for the simple use-case I've outlined in this article, hope to have shown you a few reasons why I don't think I'll ever go back from emacs.

Well, if we're being honest, if an 'emacs-lite' came out tomorrow, offering all of the things emacs offers, out of the box, needing only that ~20 LoC of config - and removed out 99% of the features of emacs I don't actually use(!) - I would switch that that new emacs-lite ide in a heartbeat. 
