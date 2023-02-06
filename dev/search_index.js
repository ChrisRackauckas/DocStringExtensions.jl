var documenterSearchIndex = {"docs":
[{"location":"showcase/#Showcase","page":"Showcase","title":"Showcase","text":"","category":"section"},{"location":"showcase/","page":"Showcase","title":"Showcase","text":"CurrentModule = Showcase","category":"page"},{"location":"showcase/","page":"Showcase","title":"Showcase","text":"This page shows how the various abbreviations look. The docstrings themselves can be found in docs/Showcase/src/Showcase.jl.","category":"page"},{"location":"showcase/#Modules","page":"Showcase","title":"Modules","text":"","category":"section"},{"location":"showcase/","page":"Showcase","title":"Showcase","text":"Showcase","category":"page"},{"location":"showcase/#Showcase.Showcase","page":"Showcase","title":"Showcase.Showcase","text":"This docstring is attached to the Showcase module itself.\n\nThe EXPORTS abbreviation creates a bulleted list of all the exported names:\n\nFoobar\nfoo\n\nSimilarly, the IMPORTS abbreviation lists all the imported modules:\n\nBase\nCore\nDocStringExtensions\n\nThe README can be used to include the README.md file in a docstring. The content between the horizontal lines is spliced by the abbreviation:\n\n\n\nShowcase.jl\n\nThe demo library for DocStringExtensions.\n\n\n\nThe LICENSE abbreviation can be used in the same way for the LICENSE.md file.\n\n\n\n\n\n","category":"module"},{"location":"showcase/#Functions-and-methods","page":"Showcase","title":"Functions and methods","text":"","category":"section"},{"location":"showcase/","page":"Showcase","title":"Showcase","text":"foo\nfoo(::Int)\nfoo(::String)","category":"page"},{"location":"showcase/#Showcase.foo","page":"Showcase","title":"Showcase.foo","text":"This docstring is attached to an empty function definitions. The METHODLIST abbreviation allows you to list all the methods though:\n\nfoo(x)\nfoo(x, y)\n\ndefined at /home/runner/work/DocStringExtensions.jl/DocStringExtensions.jl/docs/Showcase/src/Showcase.jl:59.\n\nfoo(x)\n\ndefined at /home/runner/work/DocStringExtensions.jl/DocStringExtensions.jl/docs/Showcase/src/Showcase.jl:70.\n\n\n\n\n\n","category":"function"},{"location":"showcase/#Showcase.foo-Tuple{Int64}","page":"Showcase","title":"Showcase.foo","text":"This docstring is attached to a method that uses default values for some positional arguments: foo(x::Int, y=3).\n\nAs this effectively means that there are two different methods taking different numbers of arguments, the SIGNATURES abbreviation produces the following result:\n\nfoo(x)\nfoo(x, y)\n\n\n\n\nThe TYPEDSIGNATURES abbreviation can be used to also get the types of the variables in the function signature:\n\nfoo(x::Int64)\nfoo(x::Int64, y)\n\n\n\n\nThe FUNCTIONNAME abbreviation can be used to directly include the name of the function in the docstring (e.g. here: foo). This can be useful when writing your own type signatures:\n\nfoo(x, ...)\n\n\n\n\n\n","category":"method"},{"location":"showcase/#Showcase.foo-Tuple{String}","page":"Showcase","title":"Showcase.foo","text":"A different method for foo. SIGNATURES abbreviation:\n\nfoo(x)\n\n\nAnd the TYPEDSIGNATURES abbreviation:\n\nfoo(x::AbstractString)\n\n\n\n\n\n\n","category":"method"},{"location":"showcase/#Type-parameters","page":"Showcase","title":"Type parameters","text":"","category":"section"},{"location":"showcase/","page":"Showcase","title":"Showcase","text":"TYPEDSIGNATURES can also handle type parameters. However, the resulting signatures may not be as clean as in the code since they have to be reconstructed from Julia's internal representation:","category":"page"},{"location":"showcase/","page":"Showcase","title":"Showcase","text":"bar(x::AbstractArray{T}, y::T) where {T <: Integer}\nbar(x::AbstractArray{T}, ::String) where {T <: Integer}\nbar(x::AbstractArray{T}, y::U) where {T <: Integer, U <: AbstractString}","category":"page"},{"location":"showcase/#Showcase.bar-Union{Tuple{T}, Tuple{AbstractArray{T, N} where N, T}} where T<:Integer","page":"Showcase","title":"Showcase.bar","text":"A method for bar, with type parameters. Original declaration:\n\nbar(x::AbstractArray{T}, y::T) where {T <: Integer} = nothing\n\nAnd the result from TYPEDSIGNATURES abbreviation:\n\nbar(x::AbstractArray{T<:Integer, N} where N, y::Integer)\n\n\nFor comparison, SIGNATURES abbreviation:\n\nbar(x, y)\n\n\n\n\n\n\n","category":"method"},{"location":"showcase/#Showcase.bar-Union{Tuple{T}, Tuple{AbstractArray{T, N} where N, String}} where T<:Integer","page":"Showcase","title":"Showcase.bar","text":"A method for bar, with type parameters. Original declaration:\n\nbar(x::AbstractArray{T}, ::String) where {T <: Integer} = x\n\nAnd the result from TYPEDSIGNATURES abbreviation:\n\nbar(\n    x::AbstractArray{T<:Integer, N} where N,\n    _::String\n) -> AbstractArray{T, N} where {T<:Integer, N}\n\n\nFor comparison, SIGNATURES abbreviation:\n\nbar(x, _)\n\n\n\n\n\n\n","category":"method"},{"location":"showcase/#Showcase.bar-Union{Tuple{U}, Tuple{T}, Tuple{AbstractArray{T, N} where N, U}} where {T<:Integer, U<:AbstractString}","page":"Showcase","title":"Showcase.bar","text":"A method for bar, with type parameters. Original declaration:\n\nbar(x::AbstractArray{T}, y::U) where {T <: Integer, U <: AbstractString} = 0\n\nAnd the result from TYPEDSIGNATURES abbreviation:\n\nbar(\n    x::AbstractArray{T<:Integer, N} where N,\n    y::AbstractString\n) -> AbstractArray{T, N} where {T<:Integer, N}\n\n\nFor comparison, SIGNATURES abbreviation:\n\nbar(x, y)\n\n\n\n\n\n\n","category":"method"},{"location":"showcase/#Types","page":"Showcase","title":"Types","text":"","category":"section"},{"location":"showcase/","page":"Showcase","title":"Showcase","text":"Foobar","category":"page"},{"location":"showcase/#Showcase.Foobar","page":"Showcase","title":"Showcase.Foobar","text":"The TYPEDEF abbreviation includes the type signature:\n\nstruct Foobar{T<:AbstractString}\n\n\n\nThe FIELDS abbreviation creates a list of all the fields of the type. If the fields has a docstring attached, that will also get included.\n\nx: Docstring for the x field.\ny\nz: Docstring for the z field.\n\n\n\nTYPEDFIELDS also adds in types for the fields:\n\nx::Nothing: Docstring for the x field.\ny::AbstractString\nz::Vector{T} where T<:AbstractString: Docstring for the z field.\n\n\n\n\n\n","category":"type"},{"location":"#DocStringExtensions","page":"Home","title":"DocStringExtensions","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"DocStringExtensions","category":"page"},{"location":"#DocStringExtensions","page":"Home","title":"DocStringExtensions","text":"Extensions for the Julia docsystem.\n\nIntroduction\n\nThis package provides a collection of useful extensions for Julia's built-in docsystem. These are features that are still regarded as \"experimental\" and not yet mature enough to be considered for inclusion in Base, or that have sufficiently niche use cases that including them with the default Julia installation is not seen as valuable enough at this time.\n\nCurrently DocStringExtensions.jl exports a collection of so-called \"abbreviations\", which can be used to add useful automatically generated information to docstrings. These include information such as:\n\nsimplified method signatures;\ndocumentation for the individual fields of composite types;\nimport and export lists for modules;\nand source-linked lists of methods applicable to a particular docstring.\n\nUsers are most welcome to suggest additional abbreviation ideas, or implement and submit them themselves. Julia's strong support for program introspection makes this a reasonably straight forward process.\n\nDetails of the currently available abbreviations can be viewed in their individual docstrings listed below in the \"Exports\" section.\n\nExamples\n\nIn simple terms an abbreviation can be used by simply interpolating it into a suitable docstring. For example:\n\nusing DocStringExtensions\n\n\"\"\"\nA short summary of `func`...\n\n$(SIGNATURES)\n\nwhere `x` and `y` should both be positive.\n\n# Details\n\nSome details about `func`...\n\"\"\"\nfunc(x, y) = x + y\n\n$(SIGNATURES) will be replaced in the above docstring with\n\n# Signatures\n\n```julia\nfunc(x, y)\n```\n\nThe resulting generated content can be viewed via Julia's ? mode or, if Documenter.jl is set up, the generated external documentation.\n\nThe advantage of using SIGNATURES (and other abbreviations) is that docstrings are less likely to become out-of-sync with the surrounding code. Note though that references to the argument names x and y that have been manually embedded within the docstring are, of course, not updated automatically.\n\nExports\n\nDOCSTRING\nEXPORTS\nFIELDS\nFUNCTIONNAME\nIMPORTS\nLICENSE\nMETHODLIST\nREADME\nSIGNATURES\nTYPEDEF\nTYPEDFIELDS\nTYPEDSIGNATURES\ninterpolation\n@template\n\nImports\n\nBase\nCore\n\n\n\n\n\n","category":"module"},{"location":"#Index","page":"Home","title":"Index","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Pages = [\"index.md\"]","category":"page"},{"location":"#Reference","page":"Home","title":"Reference","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Modules = [DocStringExtensions]\nOrder = [:constant]","category":"page"},{"location":"#DocStringExtensions.DOCSTRING","page":"Home","title":"DocStringExtensions.DOCSTRING","text":"An Abbreviation used in @template definitions to represent the location of the docstring body that should be spliced into a template.\n\nwarning: Warning\nThis abbreviation must only ever be used in template strings; never normal docstrings.\n\n\n\n\n\n","category":"constant"},{"location":"#DocStringExtensions.EXPORTS","page":"Home","title":"DocStringExtensions.EXPORTS","text":"An Abbreviation to include all the exported names of a module is a sorted list of Documenter.jl-style @ref links.\n\nnote: Note\nThe names are sorted alphabetically and ignore leading @ characters so that macros are not sorted before other names.\n\nExamples\n\nThe markdown text generated by the EXPORTS abbreviation looks similar to the following:\n\n\n  - [`bar`](@ref)\n  - [`@baz`](@ref)\n  - [`foo`](@ref)\n\n\n\n\n\n\n","category":"constant"},{"location":"#DocStringExtensions.FIELDS","page":"Home","title":"DocStringExtensions.FIELDS","text":"An Abbreviation to include the names of the fields of a type as well as any documentation that may be attached to the fields.\n\nExamples\n\nThe generated markdown text should look similar to to following example where a type has three fields (x, y, and z) and the last two have documentation attached.\n\n\n  - `x`\n\n  - `y`\n\n    Unlike the `x` field this field has been documented.\n\n  - `z`\n\n    Another documented field.\n\n\n\n\n\n","category":"constant"},{"location":"#DocStringExtensions.FUNCTIONNAME","page":"Home","title":"DocStringExtensions.FUNCTIONNAME","text":"An Abbreviation for including the function name matching the method of the docstring.\n\nUsage\n\nThis is mostly useful for not repeating the function name in docstrings where the user wants to retain full control of the argument list, or the latter does not exist (eg generic functions).\n\nNote that the generated docstring snippet is not quoted, use indentation or explicit quoting.\n\nExample\n\n\"\"\"\n    $(FUNCTIONNAME)(d, θ)\n\nCalculate the logdensity `d` at `θ`.\n\nUsers should define their own methods for `FUNCTIONNAME`.\n\"\"\"\nfunction logdensity end\n\n\n\n\n\n","category":"constant"},{"location":"#DocStringExtensions.IMPORTS","page":"Home","title":"DocStringExtensions.IMPORTS","text":"An Abbreviation to include all the imported modules in a sorted list.\n\nExamples\n\nThe markdown text generated by the IMPORTS abbreviation looks similar to the following:\n\n\n  - `Foo`\n  - `Bar`\n  - `Baz`\n\n\n\n\n\n\n","category":"constant"},{"location":"#DocStringExtensions.LICENSE","page":"Home","title":"DocStringExtensions.LICENSE","text":"LICENSE\n\nAn Abbreviation for including the package LICENSE.md.\n\nnote: Note\nThe LICENSE.md file is interpreted as \"Julia flavored Markdown\", which has some differences compared to GitHub flavored markdown, and, for example, [][] link shortcuts are not supported.\n\n\n\n\n\n","category":"constant"},{"location":"#DocStringExtensions.METHODLIST","page":"Home","title":"DocStringExtensions.METHODLIST","text":"An Abbreviation for including a list of all the methods that match a documented Method, Function, or DataType within the current module.\n\nExamples\n\nThe generated markdown text will look similar to the following example where a function f defines two different methods (one that takes a number, and the other a string):\n\n```julia\nf(num)\n```\n\ndefined at [`<path>:<line>`](<github-url>).\n\n```julia\nf(str)\n```\n\ndefined at [`<path>:<line>`](<github-url>).\n\n\n\n\n\n","category":"constant"},{"location":"#DocStringExtensions.README","page":"Home","title":"DocStringExtensions.README","text":"README\n\nAn Abbreviation for including the package README.md.\n\nnote: Note\nThe README.md file is interpreted as \"Julia flavored Markdown\", which has some differences compared to GitHub flavored markdown, and, for example, [][] link shortcuts are not supported.\n\n\n\n\n\n","category":"constant"},{"location":"#DocStringExtensions.SIGNATURES","page":"Home","title":"DocStringExtensions.SIGNATURES","text":"An Abbreviation for including a simplified representation of all the method signatures that match the given docstring. See printmethod for details on the simplifications that are applied.\n\nExamples\n\nThe generated markdown text will look similar to the following example where a function f defines method taking two positional arguments, x and y, and two keywords, a and the b.\n\n```julia\nf(x, y; a, b...)\n```\n\n\n\n\n\n","category":"constant"},{"location":"#DocStringExtensions.TYPEDEF","page":"Home","title":"DocStringExtensions.TYPEDEF","text":"An Abbreviation for including a summary of the signature of a type definition. Some of the following information may be included in the output:\n\nwhether the object is an abstract type or a bitstype;\nmutability (either type or struct is printed);\nthe unqualified name of the type;\nany type parameters;\nthe supertype of the type if it is not Any.\n\nExamples\n\nThe generated output for a type definition such as:\n\n\"\"\"\n$(TYPEDEF)\n\"\"\"\nstruct MyType{S, T <: Integer} <: AbstractArray\n    # ...\nend\n\nwill look similar to the following:\n\n```julia\nstruct MyType{S, T<:Integer} <: AbstractArray\n```\n\nnote: Note\nNo information about the fields of the type is printed. Use the FIELDS abbreviation to include information about the fields of a type.\n\n\n\n\n\n","category":"constant"},{"location":"#DocStringExtensions.TYPEDFIELDS","page":"Home","title":"DocStringExtensions.TYPEDFIELDS","text":"Identical to FIELDS except that it includes the field types.\n\nExamples\n\nThe generated markdown text should look similar to to following example where a type has three fields; x of type String, y of type Int, and z of type Vector{Any}.\n\n\n  - `x::String`\n\n  - `y::Int`: Unlike the `x` field this field has been documented.\n\n  - `z::Array{Any, 1}`: Another documented field.\n\n\n\n\n\n","category":"constant"},{"location":"#DocStringExtensions.TYPEDSIGNATURES","page":"Home","title":"DocStringExtensions.TYPEDSIGNATURES","text":"An Abbreviation for including a simplified representation of all the method signatures with types that match the given docstring. See printmethod for details on the simplifications that are applied.\n\nExamples\n\nThe generated markdown text will look similar to the following example where a function f defines method taking two positional arguments, x and y, and two keywords, a and the b.\n\n```julia\nf(x::Int, y::Int; a, b...)\n```\n\n\n\n\n\n","category":"constant"},{"location":"","page":"Home","title":"Home","text":"DocStringExtensions.@template","category":"page"},{"location":"#DocStringExtensions.@template","page":"Home","title":"DocStringExtensions.@template","text":"Defines a docstring template that will be applied to all docstrings in a module that match the specified category or tuple of categories.\n\nExamples\n\n@template DEFAULT =\n    \"\"\"\n    $(SIGNATURES)\n    $(DOCSTRING)\n    \"\"\"\n\nDEFAULT is the default template that is applied to a docstring if no other template definitions match the documented expression. The DOCSTRING abbreviation is used to mark the location in the template where the actual docstring body will be spliced into each docstring.\n\n@template (FUNCTIONS, METHODS, MACROS) =\n    \"\"\"\n    $(SIGNATURES)\n    $(DOCSTRING)\n    $(METHODLIST)\n    \"\"\"\n\nA tuple of categories can be specified when a docstring template should be used for several different categories.\n\n@template MODULES = ModName\n\nThe template definition above will define a template for module docstrings based on the template for modules found in module ModName.\n\nnote: Note\nSupported categories are DEFAULT, FUNCTIONS, METHODS, MACROS, TYPES, MODULES, and CONSTANTS.\n\n\n\n\n\n","category":"macro"},{"location":"internals/#Internals","page":"Internals","title":"Internals","text":"","category":"section"},{"location":"internals/","page":"Internals","title":"Internals","text":"These functions, types etc. are internal to DocStringExtensions and not part of the public API. They may change or be removed arbitrarily from version to version.","category":"page"},{"location":"internals/","page":"Internals","title":"Internals","text":"Pages = [\"internals.md\"]","category":"page"},{"location":"internals/","page":"Internals","title":"Internals","text":"Modules = [DocStringExtensions]\nOrder = [:function, :type]","category":"page"},{"location":"internals/#DocStringExtensions.alltypesigs-Tuple{Any}","page":"Internals","title":"DocStringExtensions.alltypesigs","text":"alltypesigs(sig)\n\n\nReturns a Vector of the Tuple types contained in sig.\n\n\n\n\n\n","category":"method"},{"location":"internals/#DocStringExtensions.arguments-Tuple{Method}","page":"Internals","title":"DocStringExtensions.arguments","text":"arguments(m)\n\n\nReturns the list of arguments for a particular method m.\n\nExamples\n\nf(x; a = 1, b...) = x\nargs = arguments(first(methods(f)))\n\n\n\n\n\n","category":"method"},{"location":"internals/#DocStringExtensions.cleanpath-Tuple{AbstractString}","page":"Internals","title":"DocStringExtensions.cleanpath","text":"cleanpath(path)\n\n\nRemove the Pkg.dir part of a file path if it exists.\n\n\n\n\n\n","category":"method"},{"location":"internals/#DocStringExtensions.comparemethods-Tuple{Method, Method}","page":"Internals","title":"DocStringExtensions.comparemethods","text":"comparemethods(a, b)\n\n\nCompare methods a and b by file and line number.\n\n\n\n\n\n","category":"method"},{"location":"internals/#DocStringExtensions.find_tuples-Tuple{Any}","page":"Internals","title":"DocStringExtensions.find_tuples","text":"find_tuples(typesig)\n\n\nConverts a method signature (or a union of several signatures) in a vector of (single) signatures.\n\nThis is used for decoding the method signature that a docstring is paired with. In the case when the docstring applies to multiple methods (e.g. when default positional argument values are used and define multiple methods at once), they are combined together as union of Tuple types.\n\njulia> DocStringExtensions.find_tuples(Tuple{String,Number,Int})\n1-element Array{DataType,1}:\n Tuple{String,Number,Int64}\n\njulia> DocStringExtensions.find_tuples(Tuple{T} where T <: Integer)\n1-element Array{DataType,1}:\n Tuple{T<:Integer}\n\njulia> s = Union{\n         Tuple{Int64},\n         Tuple{U},\n         Tuple{T},\n         Tuple{Int64,T},\n         Tuple{Int64,T,U}\n       } where U where T;\n\njulia> DocStringExtensions.find_tuples(s)\n5-element Array{DataType,1}:\n Tuple{Int64}\n Tuple{U}\n Tuple{T}\n Tuple{Int64,T}\n Tuple{Int64,T,U}\n\n\n\n\n\n","category":"method"},{"location":"internals/#DocStringExtensions.format-Tuple{Any, Any, Any}","page":"Internals","title":"DocStringExtensions.format","text":"format(abbr, buf, doc)\n\n\nExpand the Abbreviation abbr in the context of the DocStr doc and write the resulting markdown-formatted text to the IOBuffer buf.\n\n\n\n\n\n","category":"method"},{"location":"internals/#DocStringExtensions.getmethods!-Tuple{Any, Any, Any}","page":"Internals","title":"DocStringExtensions.getmethods!","text":"getmethods!(results, f, sig)\n\n\nA helper method for getmethods that collects methods in results.\n\n\n\n\n\n","category":"method"},{"location":"internals/#DocStringExtensions.getmethods-Tuple{Any, Any}","page":"Internals","title":"DocStringExtensions.getmethods","text":"getmethods(f, sig)\n\n\nCollect and return all methods of function f matching signature sig.\n\nThis is similar to methods(f, sig), but handles type signatures found in DocStr objects more consistently that methods.\n\n\n\n\n\n","category":"method"},{"location":"internals/#DocStringExtensions.groupby!-Tuple{Any, Any, Any}","page":"Internals","title":"DocStringExtensions.groupby!","text":"groupby!(f, groups, data)\n\n\nA helper method for groupby that uses a pre-allocated groups Dict.\n\n\n\n\n\n","category":"method"},{"location":"internals/#DocStringExtensions.groupby-NTuple{4, Any}","page":"Internals","title":"DocStringExtensions.groupby","text":"groupby(f, K, V, data)\n\n\nGroup data using function f where key type is specified by K and group type by V.\n\nThe function f takes a single argument, an element of data, and should return a 2-tuple of (computed_key, element). See the example below for details.\n\nExamples\n\ngroupby(Int, Vector{Int}, collect(1:10)) do num\n    mod(num, 3), num\nend\n\n\n\n\n\n","category":"method"},{"location":"internals/#DocStringExtensions.hook!-Tuple{Any}","page":"Internals","title":"DocStringExtensions.hook!","text":"hook!(func)\n\n\nSet the docstring expander function to first call func before calling the default expander.\n\nTo remove a hook that has been applied using this method call hook!().\n\n\n\n\n\n","category":"method"},{"location":"internals/#DocStringExtensions.hook!-Tuple{}","page":"Internals","title":"DocStringExtensions.hook!","text":"hook!()\n\n\nReset the docstring expander to only call the default expander function. This clears any 'hook' that has been set using hook!(func).\n\n\n\n\n\n","category":"method"},{"location":"internals/#DocStringExtensions.interpolation-Tuple{Any, Any}","page":"Internals","title":"DocStringExtensions.interpolation","text":"interpolation(object::T, captured::Expr) -> new_object\n\nInterface method for hooking into interpolation within docstrings to change the behaviour of the interpolation. object is the interpolated object within a docstring and captured is the raw expression that is documented by the docstring in which the interpolated object has been included.\n\nTo define custom behaviour for your own object types implement a method of interpolation(::T, captured) for type T and return a new_object to be interpolated into the final docstring. Note that you must own the definition of type T. new_object does not need to be of type T.\n\n\n\n\n\n","category":"method"},{"location":"internals/#DocStringExtensions.keywords-Tuple{Any, Method}","page":"Internals","title":"DocStringExtensions.keywords","text":"keywords(func, m)\n\n\nReturns the list of keywords for a particular method m of a function func.\n\nExamples\n\nf(x; a = 1, b...) = x\nkws = keywords(f, first(methods(f)))\n\n\n\n\n\n","category":"method"},{"location":"internals/#DocStringExtensions.method_length_over_limit-Tuple{Int64}","page":"Internals","title":"DocStringExtensions.method_length_over_limit","text":"method_length_over_limit(len)\n\n\nDecides whether a length of method is too big to be visually appealing.\n\n\n\n\n\n","category":"method"},{"location":"internals/#DocStringExtensions.methodgroups-Tuple{Any, Any, Any}","page":"Internals","title":"DocStringExtensions.methodgroups","text":"methodgroups(func, typesig, modname; exact)\n\n\nGroup all methods of function func with type signatures typesig in module modname. Keyword argument exact = true matches signatures \"exactly\" with == rather than <:.\n\nExamples\n\ngroups = methodgroups(f, Union{Tuple{Any}, Tuple{Any, Integer}}, Main; exact = false)\n\n\n\n\n\n","category":"method"},{"location":"internals/#DocStringExtensions.parsedocs-Tuple{Module}","page":"Internals","title":"DocStringExtensions.parsedocs","text":"parsedocs(mod)\n\n\nParse all docstrings defined within a module mod.\n\n\n\n\n\n","category":"method"},{"location":"internals/#DocStringExtensions.printmethod-Tuple{IOBuffer, Base.Docs.Binding, Any, Method, Any}","page":"Internals","title":"DocStringExtensions.printmethod","text":"printmethod(\n    buffer::IOBuffer,\n    binding::Base.Docs.Binding,\n    func,\n    method::Method,\n    typesig\n) -> IOBuffer\n\n\nPrint a simplified representation of a method signature to buffer. Some of these simplifications include:\n\nno TypeVars;\nno types;\nno keyword default values;\n\nExamples\n\nf(x::Int; a = 1, b...) = x\nsig = printmethod(Docs.Binding(Main, :f), f, first(methods(f)))\n\n\n\n\n\n","category":"method"},{"location":"internals/#DocStringExtensions.printmethod-Tuple{IOBuffer, Base.Docs.Binding, Any, Method}","page":"Internals","title":"DocStringExtensions.printmethod","text":"printmethod(buffer, binding, func, method)\n\n\nPrint a simplified representation of a method signature to buffer. Some of these simplifications include:\n\nno TypeVars;\nno types;\nno keyword default values;\n_ printed where #unused# arguments are found.\n\nExamples\n\nf(x; a = 1, b...) = x\nsig = printmethod(Docs.Binding(Main, :f), f, first(methods(f)))\n\n\n\n\n\n","category":"method"},{"location":"internals/#DocStringExtensions.url-Tuple{Method}","page":"Internals","title":"DocStringExtensions.url","text":"url(m)\n\n\nGet the URL (file and line number) where a method m is defined.\n\nNote that this is based on the implementation of Base.url, but handles URLs correctly on TravisCI as well.\n\n\n\n\n\n","category":"method"},{"location":"internals/#DocStringExtensions.Abbreviation","page":"Internals","title":"DocStringExtensions.Abbreviation","text":"Abbreviation objects are used to automatically generate context-dependent markdown content within documentation strings. Objects of this type interpolated into docstrings will be expanded automatically before parsing the text to markdown.\n\n\n\n\n\n","category":"type"},{"location":"internals/#DocStringExtensions.DocStringTemplate","page":"Internals","title":"DocStringExtensions.DocStringTemplate","text":"The singleton type for DOCSTRING abbreviations.\n\n\n\n\n\n","category":"type"},{"location":"internals/#DocStringExtensions.FunctionName","page":"Internals","title":"DocStringExtensions.FunctionName","text":"The singleton type for FUNCTIONNAME abbreviations.\n\n\n\n\n\n","category":"type"},{"location":"internals/#DocStringExtensions.License","page":"Internals","title":"DocStringExtensions.License","text":"The singleton type for LICENSE abbreviations.\n\n\n\n\n\n","category":"type"},{"location":"internals/#DocStringExtensions.MethodList","page":"Internals","title":"DocStringExtensions.MethodList","text":"The singleton type for METHODLIST abbreviations.\n\n\n\n\n\n","category":"type"},{"location":"internals/#DocStringExtensions.MethodSignatures","page":"Internals","title":"DocStringExtensions.MethodSignatures","text":"The singleton type for SIGNATURES abbreviations.\n\n\n\n\n\n","category":"type"},{"location":"internals/#DocStringExtensions.ModuleExports","page":"Internals","title":"DocStringExtensions.ModuleExports","text":"The singleton type for EXPORTS abbreviations.\n\n\n\n\n\n","category":"type"},{"location":"internals/#DocStringExtensions.ModuleImports","page":"Internals","title":"DocStringExtensions.ModuleImports","text":"The singleton type for IMPORTS abbreviations.\n\n\n\n\n\n","category":"type"},{"location":"internals/#DocStringExtensions.Readme","page":"Internals","title":"DocStringExtensions.Readme","text":"The singleton type for README abbreviations.\n\n\n\n\n\n","category":"type"},{"location":"internals/#DocStringExtensions.Template","page":"Internals","title":"DocStringExtensions.Template","text":"Internal abbreviation type used to wrap templated docstrings.\n\nLocation is a Symbol, either :before or :after. dict stores a reference to a module's templates.\n\n\n\n\n\n","category":"type"},{"location":"internals/#DocStringExtensions.TypeDefinition","page":"Internals","title":"DocStringExtensions.TypeDefinition","text":"The singleton type for TYPEDEF abbreviations.\n\n\n\n\n\n","category":"type"},{"location":"internals/#DocStringExtensions.TypeFields","page":"Internals","title":"DocStringExtensions.TypeFields","text":"The type for FIELDS abbreviations.\n\ntypes\n\n\n\n\n\n","category":"type"},{"location":"internals/#DocStringExtensions.TypedMethodSignatures","page":"Internals","title":"DocStringExtensions.TypedMethodSignatures","text":"The singleton type for TYPEDSIGNATURES abbreviations.\n\n\n\n\n\n","category":"type"}]
}
