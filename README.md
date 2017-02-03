# Parametric Cube in STL
A repository to generate a family of open cubes in STL

## Usage
Call `index.js` with eiter 1, 2 or 3 parameters

## STL
[Stereolitography][stl] is a

> a file format native to the stereolithography CAD software created by 3D
> Systems. STL has several after-the-fact backronyms such as "Standard
> Triangle Language" and "Standard Tessellation Language". This file format
> is supported by many other software packages; it is widely used for rapid
> prototyping, 3D printing and computer-aided manufacturing. STL files
> describe only the surface geometry of a three-dimensional object without any
> representation of color, texture or other common CAD model attributes. The STL
> format specifies both ASCII and binary representations. Binary files are more
> common, since they are more compact. 

### Description
The following is verbatim from wikipedia.

An ASCII STL file begins with the line

```
solid name
```

where name is an optional string (though if name is omitted there must still be
a space after solid). The file continues with any number of triangles, each
represented as follows: 

```
facet normal ni nj nk
    outer loop
        vertex v1x v1y v1z
        vertex v2x v2y v2z
        vertex v3x v3y v3z
    endloop
endfacet
```
where each n or v is a floating-point number in sign-mantissa-"e"-sign-exponent
format, e.g., "2.648000e-002" (noting that each v must be non-negative). The
file concludes with 

```
endsolid name
```

The structure of the format suggests that other possibilities exist (e.g.,
facets with more than one "loop", or loops with more than three vertices). In
practice, however, all facets are simple triangles. 

White space (spaces, tabs, newlines) may be used anywhere in the file except
within numbers or words. The spaces between "facet" and "normal" and between
"outer" and "loop" are required.

[stl]: https://en.wikipedia.org/wiki/STL_(file_format)
