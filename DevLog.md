# Things I Learnt 🧠
## Learning Process:
* ReactThreeFiber Learning Process
  * At the beginning of this project, I had no idea how to get 3D Objects into a website or if 3D was appropriate/possible - so this was how I learnt it:
  1. Dove into the documentation to get their 'intro project' up and running
  2. Experimented with other things (importing Blender models, playing animations, cursor controls, displaying text and 3D objects) - some of these can be found in the 'checkpoint' branches - Resources used:
     * React Three Fiber Docs and React Three Drei Docs
     * ReactThreeFiber Examples - checked the codesandboxes - find the code that does the thing that I want and ammend it as needed
     * Forums: react-three-fiber GitHub Discussions, Threejs Discourse, Threejs Reddit
  3. Once basics were covered and knew that using 3D was actually a viable idea - implemented knowledge from experiments into the actual website using actual models
* Blender
  * 'Glass': used rigid bodies
  * gltf viewer
  * If animation:
    * bake rigid body into keyframes
## ReactThreeFiber: Adding Model from Blender
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


## Maximo has a Blender Transparency Problem
* Change Blend Mode to **OPAQUE**

![](/images/2021-08-16-12-29-52.png)
![](/images/2021-08-16-12-30-06.png)

* otherwise you will get this monstrocity
![](/images/2021-08-16-12-31-30.png)

## Running all animations/actions in a blender file
```js
const { actions } = useAnimations(animations, group)

useEffect(() => {
   Object.keys(actions).forEach((key) => actions[key].play())
}, [actions])
```

## Blender Glass Material
* *Not the final glass material used
![](/images/2021-08-28-09-13-40.png)
![](/images/2021-08-28-09-14-02.png)
![](/images/2021-08-28-09-14-24.png)
![](/images/2021-08-28-09-14-45.png)

## BPM Counter (Prologue > Chest Compression Mechanic)
* Source (linear regression): https://github.com/lindr0s/bpm-counter
* Alternative (difference between taps): https://github.com/erhed/bpm-counter-html-javascript/blob/master/index.html

## Mouse press and hold // long press (Prologue > Rescue Breaths)
* https://dirask.com/posts/React-mouse-button-press-and-hold-example-pzrAap