<details>
<summary>stuff I learnt/code references/solutions to problems that I will inevitably run into for furture projects</summary>

* starting point: Very minimal knowledge of how to build a React app (limited to single page web apps) and a far to ambitious idea that was clearly beyond my reach but wanted to try out anyway :]

* what I learnt
  * the importance and appreciation for well-written technical documentation
  * how not to write efficient and organised code
  * how to css
  * 
  * and all of this other stuff:
#### ReactThreeFiber: Adding Model from Blender
1. Blender: Export to `model.gltf` (save in `/public`)
2. Use [gltfjsx](https://github.com/pmndrs/gltfjsx) to make model more customisable
    ```shell
    npx gtlfjsx model.gltf
    ```
   * converts `.gltf` to `.js` React Component
3. Use the react component
   * `import Model from './Model'`
4. Or just link to `model.gltf`
   * `<Model url="/model.gltf>`

#### Maximo has a Blender Transparency Problem
* Change Blend Mode to **OPAQUE**

![](/images/2021-08-16-12-29-52.png)
![](/images/2021-08-16-12-30-06.png)

* otherwise you will get this monstrocity
![](/images/2021-08-16-12-31-30.png)

#### Running all animations/actions in a blender file
```js
const { actions } = useAnimations(animations, group)

useEffect(() => {
   Object.keys(actions).forEach((key) => actions[key].play())
}, [actions])
```

#### Blender Glass Material
* *Not the final glass material used - because I couldn't get the lighting right ;-;
![](/images/2021-08-28-09-13-40.png)
![](/images/2021-08-28-09-14-02.png)
![](/images/2021-08-28-09-14-24.png)
![](/images/2021-08-28-09-14-45.png)

#### BPM Counter (Prologue > Chest Compression Mechanic)
* Source (linear regression): https://github.com/lindr0s/bpm-counter
* Alternative (difference between taps): https://github.com/erhed/bpm-counter-html-javascript/blob/master/index.html

#### Mouse press and hold // long press (Prologue > Rescue Breaths)
* https://dirask.com/posts/React-mouse-button-press-and-hold-example-pzrAap
</details>