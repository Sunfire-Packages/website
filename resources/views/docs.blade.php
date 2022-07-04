<x-layout.app :title="$title" :canonical="$canonical">

    <div class="lg:flex container px-4 py-4 lg:px-0 lg:py-20" id="docsScreen">

        <div class="lg:w-2/6 docs_sidebar">

            <x-logo-long class="mb-8"/>

            <div class="mb-12">
                {!! $index !!}
            </div>

        </div>

        <div class="flex-1 overflow-hidden prose 2xl:prose-xl font-second pt-3">
            {!! $content !!}
        </div>
    </div>

    <x-footer/>

</x-layout.app>
