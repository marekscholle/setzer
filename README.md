# setzer

https://marekscholle.github.io/setzer/

Organ sequencer editor for Bohuslav Martinů Hall (Liechtenstein Palace, Prague): There are 1000 combinations × 50 stops that may saved from/loaded to the instrument from a file binary of size 8000b = 1000 × 8b, where each from first 50 bits (in every 8b segment) denotes whether a respective stop is on or off.

### About

This is a toy non-commercial project to try [Typescript](https://www.typescriptlang.org/), [React](https://reactjs.org/), [Redux](https://redux.js.org/) and JS programming in general. Created with help of Microsoft's [Typescript-React-Starter](https://github.com/Microsoft/TypeScript-React-Starter). [My daily bread and butter is server-side Scala ([LinkedIn](https://www.linkedin.com/in/marek-scholle-83a44a156/))]

Once there was a version written in [scalajs-react](https://github.com/japgolly/scalajs-react), but it was, hmm ... a pain, partly because it was written in plain React without state management in Redux. Tooling wasn't ideal, Intellij's Scala plugin isn't fast enough. Nobody wants to learn [sbt](https://www.scala-sbt.org/) for toy project. Incorporating JS modules is hard (superhard compared to `npm install`).

### Design decisions

* client-side-only application, no server
* functional from ground up (Redux, [immutable.js](https://facebook.github.io/immutable-js/))
* typesafe
* using the best of available technologies
* agile: do not complicate things if a simple solution works
* don't spend too much free time on it :)

### Upshots

* development of browser UI is quite fun with quick iterations
* react+redux is really superior way to build browser apps
* Typescript is wonderful language for JS world that is in some part ahead of Scala (union types). No more missing props found when running the app. It is a simple yet powerful language. Development is fluent
* Visual Studio Code is wonderful Typescript IDE (it would be sad if it weren't). I really appreciate the IntelliSense help, instant renames. It is like writing Java code in Intellij. Only git support may be better and also diff tool isn't on JetBrains level
