---
isDraft: true 
metaContent: {
    title: "Errors as values: Why it's the better approach?",
    description: "Why we should return errors as values instead of throwing them around, hoping someone will catch them?",
    heroImage: [true, "/publication/errors-as-values-the-better-approach.jpg"],
    keywords: ["error handling","errors as values"]
}
createdAt: "20 Aug 2024"
---

## The Devil Pokes

As a software developer, what's one thing that can always infuriate you? **Error causing events**. And the way that your programming language allow you to handle them increases your affinity towards that language.

Up till last year, I was riding the train on Object Oriented Programming design patterns, which I have come to dislike. But now more than anything, I am a bigger fan of Procedural Programming also taking a keen interest in the Functional Paradigm.

And in this transition I came to a realization, that `try catch` kinda sucks. And returning error as a value is much more convenient, both syntactically and for the flow of the program.

## The Issue With `try catch`

When working with a system of `try catch`, you never know which function might throw a method unless it's marked that it might, and for that reason it's the responsibility of the programmer to catch it, or they can just leave it as is the the function they wrote will throw that error up the call stack. And there's the issue, what if while writing the code, the forget both to handle the exception and mark the function as "throwing", the next person who will use that function, will just be bewildered when their application fails.

This kind of situation can occur to anyone, and it's plain annoying.

A simple example to demonstrate:

```java showLineNumbers=true
class Example{
    public void func (int n) {
        try {
            func1();
            func2();
            func3();
        } catch (Exception e){
            /* handle exception */
        }
    }
}
```

In the above case we don't know for sure which function call is responsible for the error.

The issues:

- if uncaught, huge stack-dumps
- cleanup is a nightmare
- hard to find source in large try blocks
- the control-flow of the gets highjacked

Now don't get me wrong, if done properly, we can avoid a few of the issues i mentioned above.

## Explicit Error Handling

What if our program didn't threw error, but instead returned it just like any normal value.

Let's leap back in time and look at the the beloved programming language `c`, it was simple, if failure occur, just return a reserved special value as the result of the function.

Seems complex! Yeah i know. But hear me out, what if we made doing this simpler? What if we return a combination of the result and error together through, let's say a wrapper structure/type, union, tuple etc.

Well, there we have it, some modern programming language creators identified this and designed programming languages where error are treated and passed around just like values.

Some examples of this kind of languages are [**`Rust`**](https://www.rust-lang.org/), [**`Zig`**](https://ziglang.org/), [**`Go`**](https://go.dev/), [**`Odin`**](https://odin-lang.org/) and some others that I'm not aware of at the time of writing. Here's How they do it:

- Rust: It has two special types, `Result` and `Option` which the programmer can use to return either the result or the error, and this forces you to manage the errors as you receive them.
- Zig: You have to mark a function that will return an error and any function that will receive an error if it wants to return it too, otherwise process the error then and there.
- Go: In Go you can return tuples aka multiple values at once. So if you are concerned that something can go wrong(and believe me it will), you can include and error among your return values which the receiver is forced to process.
- Odin: Odin follows an approach that's a mix of all three above in my opinion.

How does all this benefit us:

- We are forced to handle each and every error, that means we can track the point of it's origin without huge stacktraces by appropriate reporting.
- An error occurred, we captured it, now we can handle the cleanup before returning it if we don't want to handle it then and there.
- The control flow is safe, we are not jumping around with no idea where we'll land.

Henceforth, I implore you to please take a look at these languages and try them out, you might end up liking them and using them.

## Examples

```rust showLineNumbers=true title="Rust"

enum NumberError{
    NumberTooLarge
}

fn can_error (num: u32) -> Result<u32, NumberError> {
    if num > 100 {
        return Err(NumberError::NumberTooLarge);
    }
    // do some stuff
    Ok(res)
}

fn caller () {
    match can_error(99) {
        Ok(res) => { /* process res */ },
        Err(e) => { /* handle error */ }
    }
    match can_error(120) {
        Ok(res) => { /* process res */ },
        Err(e) => { /* handle error */ }
    }
}
```

```zig showLineNumbers=true title="Zig"
fn can_error (num: u32) !u32 {
    if (num > 100) {
        return (error { NumTooLarge }).NumTooLarge;
    }
    // do some stuff
    return res;
}

fn caller() {
    var res = can_error(99) catch |err| {
        // do error handling
    };
    // process res
    res = can_error(120) catch |err| {
        // do error handling
    }
    // process res
}
```

```go showLineNumbers=true title="Go"
func canError(num int) (int, error) {
    if num > 100 {
        return 0, fmt.Errorf("input: %v, too large", num)
    }
    // do some stuff
    return res, nil
}

func caller() {
    res, err := canError(99)
    if err != nil {
        // handle error
    }
    // work with result
    res, err = canError(120)
    if err != nil {
        // handle error
    }
    // work with result
}
```

```odin showLineNumbers=true title="Odin"
NumberError :: enum {
    None,
    NumberTooLarge,
}

can_error :: proc(num: int) -> (int, NumberError) {
    if num > 100 {
        return 0, .NumberTooLarge
    }
    // do some stuff
    return res, .None
}

caller :: proc () {
    res, err := can_error(99)
    if err != .None {
        // handle error
    } else {
        // process res
    }
    res, err := can_error(120)
    if err != .None {
        // handle error
    } else {
        // process res
    }
}
```

You can implement this things in a language yourself if you are up-to the task and who knows, this might turn out to be more efficient for you. It will be tedious in the beginning, but that's how the beginning is and it's how you grow and learn new things.

## Parting Words

I hope you learnt something interesting here, which you might find useful and be able to use later in your journey as a developer, engineer.

Till then, I'll be floating around.