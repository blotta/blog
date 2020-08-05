## Cloning

```sh
git clone https://github.com/blotta/blog.git
cd blog
git submodule update --init --recursive
```

## Updating Submodules
```sh
git submodule update --recursive
```

## Development Dependencies
* [Hugo](https://gohugo.io/)

## Serve Locally
```sh
hugo server -D # -D => with drafts
```

## Create Post
```sh
hugo new posts/new_post.md
# or
hugo new posts/new_post/index.md
# or
hugo new posts/new_series/first_post.md
```

## Create Site
Updates files in `public/`
```sh
hugo
```

## Upload Site
Commit the `public` submodule before the hugo project
```sh
cd public
git add *
git commit -m "message"
git push
cd ..
git add *
git commit -m "message"
git push
```