# 🎬 Pre-Release Lifecycle: A TV Production Guide

Welcome to our studio! Instead of using standard (and let's be honest, kinda boring) pre-release tags like `alpha` or `beta`, we've adopted a lifecycle model based on TV production. It’s more fun, more intuitive, and gives everyone a clearer picture of where a feature is in its development journey.

This system is fully compatible with Semantic Versioning (SemVer). The stage name simply becomes the pre-release identifier.

---

## 🌟 The Stages of Production

Think of each pre-release as a step in bringing a show to air. Not every release needs to go through every stage—just pick the one that best describes the current state of the code.

| Stage | What It Means | Example Tag |
| :- | :- | :- |
| **`pilot`** | The very first run. It might be rough, but it proves the concept works. | `v0.1.0-pilot` |
| **`table-read`** | Early drafts and rough interactions. A great time for initial feedback. | `v0.1.1-table-read` |
| **`storyboarding`** | Planning the architecture and structure. The big picture is taking shape. | `v0.1.2-storyboarding` |
| **`scripting`** | The first real code is being written. The dialogue and action are coming together. | `v0.1.3-scripting` |
| **`blocking`** | Positioning components and testing small, isolated parts of the whole. | `v0.1.4-blocking` |
| **`filming`** | Active development is in full swing. The core features are being built. | `v0.1.5-filming` |
| **`post`** | "We'll fix it in post!" Time for tests, documentation, and final polish. | `v0.1.6-post` |
| **`greenroom`** | Development is complete. The code is waiting backstage, ready for its official launch. | `v0.1.7-greenroom` |
| **`premiere`** | 🎉 It's showtime! The official `v1.0.0` release. | `v1.0.0` |

### Optional SemVer Formatting

For multiple builds within a single stage, you can append a numeric identifier, just like with standard SemVer:

- `v0.1.0-pilot.0`
- `v0.1.1-storyboarding.1`

---

## 📛 Why We Do This

1. **It's Fun & Thematic:** It keeps our development process creative and engaging. 🎥
2. **It's Clear:** The stage names are more descriptive than `alpha` or `rc.1`, making the project's status obvious to everyone.
3. **It's Flexible:** Use the stages that fit your vibe. Not every project needs a `table-read`!

---

## 🔖 README Badge Examples

These phrases also power our status badges, giving a quick visual cue of the project's status:

- `📺 building the set` → pre-release
- `📸 filming now` → active development
- `📦 in post` → code frozen, prepping for release
- `🎬 premiere` → official v1.0.0 launch

---

## 👩‍💻 How It Works in Practice: A Developer's Guide

This system is designed to be mostly automatic. As a developer, you only need to focus on two things: your commit messages and deciding when to move to the next production stage.

### 1. Your Day-to-Day: Conventional Commits

When you create a pull request, all you need to do is use **Conventional Commit Messages**. `release-please` handles the rest.

- **Use `feat:`** for new features. This will bump the minor version (e.g., from `v0.1.0-pilot.5` to `v0.2.0-pilot.0`).
- **Use `fix:`** for bug fixes. This will bump the patch number on the pre-release tag (e.g., from `v0.1.0-pilot.5` to `v0.1.0-pilot.6`).
- **Use `chore:`, `docs:`, `style:`, etc.** for changes that don't affect the version number.

The system will automatically calculate the next version number based on the commits you merge into `main`.

### 2. Changing Stages: Moving the Production Forward

When the team decides it's time to move from one stage to the next (e.g., from `pilot` to `table-read`), the process is simple:

1. **Open a Pull Request** with a single change.

2. **Edit the `release-please-config.json` file.**

3. **Update the `prerelease-type`** to the new stage name.

   ```jsonc
   // release-please-config.json
   {
     // ...
     "prerelease": true,
     "prerelease-type": "table-read", // Changed from "pilot"
     // ...
   }
   ```

4. **Merge the PR.**

The very next time a `feat` or `fix` is merged, `release-please` will use the new stage in the version tag (e.g., `v0.2.0-table-read.0`).

<!-- This file was generated with ChatGPT and updated with GitHub Copilot as directed by Ashley Childress -->
