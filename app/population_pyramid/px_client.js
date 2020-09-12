
function plot_pyramid() {
    let raw_data = "[{\"value\": 457, \"sender\": \"ser\", \"year\": 2015, \"month\": 1}, {\"value\": 212, \"sender\": \"ser\", \"year\": 2015, \"month\": 2}, {\"value\": 67, \"sender\": \"ser\", \"year\": 2015, \"month\": 3}, {\"value\": 161, \"sender\": \"ser\", \"year\": 2015, \"month\": 4}, {\"value\": 350, \"sender\": \"ser\", \"year\": 2015, \"month\": 5}, {\"value\": 347, \"sender\": \"ser\", \"year\": 2015, \"month\": 6}, {\"value\": 305, \"sender\": \"ser\", \"year\": 2015, \"month\": 7}, {\"value\": 406, \"sender\": \"ser\", \"year\": 2015, \"month\": 8}, {\"value\": 436, \"sender\": \"ser\", \"year\": 2015, \"month\": 9}, {\"value\": 452, \"sender\": \"ser\", \"year\": 2015, \"month\": 10}, {\"value\": 326, \"sender\": \"ser\", \"year\": 2015, \"month\": 11}, {\"value\": 354, \"sender\": \"ser\", \"year\": 2015, \"month\": 12}, {\"value\": 230, \"sender\": \"ser\", \"year\": 2016, \"month\": 1}, {\"value\": 145, \"sender\": \"ser\", \"year\": 2016, \"month\": 2}, {\"value\": 180, \"sender\": \"ser\", \"year\": 2016, \"month\": 3}, {\"value\": 149, \"sender\": \"ser\", \"year\": 2016, \"month\": 4}, {\"value\": 6, \"sender\": \"ser\", \"year\": 2016, \"month\": 5}, {\"value\": 149, \"sender\": \"ser\", \"year\": 2016, \"month\": 6}, {\"value\": 312, \"sender\": \"ser\", \"year\": 2016, \"month\": 7}, {\"value\": 362, \"sender\": \"ser\", \"year\": 2016, \"month\": 8}, {\"value\": 256, \"sender\": \"ser\", \"year\": 2016, \"month\": 9}, {\"value\": 113, \"sender\": \"ser\", \"year\": 2016, \"month\": 10}, {\"value\": 456, \"sender\": \"ser\", \"year\": 2016, \"month\": 11}, {\"value\": 359, \"sender\": \"ser\", \"year\": 2016, \"month\": 12}, {\"value\": 113, \"sender\": \"ser\", \"year\": 2017, \"month\": 1}, {\"value\": 208, \"sender\": \"ser\", \"year\": 2017, \"month\": 2}, {\"value\": 90, \"sender\": \"ser\", \"year\": 2017, \"month\": 3}, {\"value\": 41, \"sender\": \"ser\", \"year\": 2017, \"month\": 4}, {\"value\": 33, \"sender\": \"ser\", \"year\": 2017, \"month\": 5}, {\"value\": 354, \"sender\": \"ser\", \"year\": 2017, \"month\": 6}, {\"value\": 177, \"sender\": \"ser\", \"year\": 2017, \"month\": 7}, {\"value\": 291, \"sender\": \"ser\", \"year\": 2017, \"month\": 8}, {\"value\": 183, \"sender\": \"ser\", \"year\": 2017, \"month\": 9}, {\"value\": 268, \"sender\": \"ser\", \"year\": 2017, \"month\": 10}, {\"value\": 285, \"sender\": \"ser\", \"year\": 2017, \"month\": 11}, {\"value\": 108, \"sender\": \"ser\", \"year\": 2017, \"month\": 12}, {\"value\": 262, \"sender\": \"ser\", \"year\": 2018, \"month\": 1}, {\"value\": 350, \"sender\": \"ser\", \"year\": 2018, \"month\": 2}, {\"value\": 2, \"sender\": \"ser\", \"year\": 2018, \"month\": 3}, {\"value\": 446, \"sender\": \"ser\", \"year\": 2018, \"month\": 4}, {\"value\": 469, \"sender\": \"ser\", \"year\": 2018, \"month\": 5}, {\"value\": 367, \"sender\": \"ser\", \"year\": 2018, \"month\": 6}, {\"value\": 31, \"sender\": \"ser\", \"year\": 2018, \"month\": 7}, {\"value\": 235, \"sender\": \"ser\", \"year\": 2018, \"month\": 8}, {\"value\": 489, \"sender\": \"ser\", \"year\": 2018, \"month\": 9}, {\"value\": 363, \"sender\": \"ser\", \"year\": 2018, \"month\": 10}, {\"value\": 469, \"sender\": \"ser\", \"year\": 2018, \"month\": 11}, {\"value\": 148, \"sender\": \"ser\", \"year\": 2018, \"month\": 12}, {\"value\": 168, \"sender\": \"ser\", \"year\": 2019, \"month\": 1}, {\"value\": 293, \"sender\": \"ser\", \"year\": 2019, \"month\": 2}, {\"value\": 319, \"sender\": \"ser\", \"year\": 2019, \"month\": 3}, {\"value\": 393, \"sender\": \"ser\", \"year\": 2019, \"month\": 4}, {\"value\": 444, \"sender\": \"ser\", \"year\": 2019, \"month\": 5}, {\"value\": 294, \"sender\": \"ser\", \"year\": 2019, \"month\": 6}, {\"value\": 281, \"sender\": \"ser\", \"year\": 2019, \"month\": 7}, {\"value\": 246, \"sender\": \"ser\", \"year\": 2019, \"month\": 8}, {\"value\": 360, \"sender\": \"ser\", \"year\": 2019, \"month\": 9}, {\"value\": 326, \"sender\": \"ser\", \"year\": 2019, \"month\": 10}, {\"value\": 399, \"sender\": \"ser\", \"year\": 2019, \"month\": 11}, {\"value\": 236, \"sender\": \"ser\", \"year\": 2019, \"month\": 12}, {\"value\": 368, \"sender\": \"ksu\", \"year\": 2015, \"month\": 1}, {\"value\": 249, \"sender\": \"ksu\", \"year\": 2015, \"month\": 2}, {\"value\": 45, \"sender\": \"ksu\", \"year\": 2015, \"month\": 3}, {\"value\": 47, \"sender\": \"ksu\", \"year\": 2015, \"month\": 4}, {\"value\": 85, \"sender\": \"ksu\", \"year\": 2015, \"month\": 5}, {\"value\": 310, \"sender\": \"ksu\", \"year\": 2015, \"month\": 6}, {\"value\": 214, \"sender\": \"ksu\", \"year\": 2015, \"month\": 7}, {\"value\": 493, \"sender\": \"ksu\", \"year\": 2015, \"month\": 8}, {\"value\": 390, \"sender\": \"ksu\", \"year\": 2015, \"month\": 9}, {\"value\": 65, \"sender\": \"ksu\", \"year\": 2015, \"month\": 10}, {\"value\": 99, \"sender\": \"ksu\", \"year\": 2015, \"month\": 11}, {\"value\": 368, \"sender\": \"ksu\", \"year\": 2015, \"month\": 12}, {\"value\": 74, \"sender\": \"ksu\", \"year\": 2016, \"month\": 1}, {\"value\": 179, \"sender\": \"ksu\", \"year\": 2016, \"month\": 2}, {\"value\": 386, \"sender\": \"ksu\", \"year\": 2016, \"month\": 3}, {\"value\": 498, \"sender\": \"ksu\", \"year\": 2016, \"month\": 4}, {\"value\": 14, \"sender\": \"ksu\", \"year\": 2016, \"month\": 5}, {\"value\": 276, \"sender\": \"ksu\", \"year\": 2016, \"month\": 6}, {\"value\": 293, \"sender\": \"ksu\", \"year\": 2016, \"month\": 7}, {\"value\": 287, \"sender\": \"ksu\", \"year\": 2016, \"month\": 8}, {\"value\": 159, \"sender\": \"ksu\", \"year\": 2016, \"month\": 9}, {\"value\": 133, \"sender\": \"ksu\", \"year\": 2016, \"month\": 10}, {\"value\": 189, \"sender\": \"ksu\", \"year\": 2016, \"month\": 11}, {\"value\": 282, \"sender\": \"ksu\", \"year\": 2016, \"month\": 12}, {\"value\": 144, \"sender\": \"ksu\", \"year\": 2017, \"month\": 1}, {\"value\": 497, \"sender\": \"ksu\", \"year\": 2017, \"month\": 2}, {\"value\": 382, \"sender\": \"ksu\", \"year\": 2017, \"month\": 3}, {\"value\": 59, \"sender\": \"ksu\", \"year\": 2017, \"month\": 4}, {\"value\": 302, \"sender\": \"ksu\", \"year\": 2017, \"month\": 5}, {\"value\": 160, \"sender\": \"ksu\", \"year\": 2017, \"month\": 6}, {\"value\": 59, \"sender\": \"ksu\", \"year\": 2017, \"month\": 7}, {\"value\": 314, \"sender\": \"ksu\", \"year\": 2017, \"month\": 8}, {\"value\": 272, \"sender\": \"ksu\", \"year\": 2017, \"month\": 9}, {\"value\": 312, \"sender\": \"ksu\", \"year\": 2017, \"month\": 10}, {\"value\": 127, \"sender\": \"ksu\", \"year\": 2017, \"month\": 11}, {\"value\": 495, \"sender\": \"ksu\", \"year\": 2017, \"month\": 12}, {\"value\": 2, \"sender\": \"ksu\", \"year\": 2018, \"month\": 1}, {\"value\": 113, \"sender\": \"ksu\", \"year\": 2018, \"month\": 2}, {\"value\": 382, \"sender\": \"ksu\", \"year\": 2018, \"month\": 3}, {\"value\": 451, \"sender\": \"ksu\", \"year\": 2018, \"month\": 4}, {\"value\": 162, \"sender\": \"ksu\", \"year\": 2018, \"month\": 5}, {\"value\": 62, \"sender\": \"ksu\", \"year\": 2018, \"month\": 6}, {\"value\": 441, \"sender\": \"ksu\", \"year\": 2018, \"month\": 7}, {\"value\": 149, \"sender\": \"ksu\", \"year\": 2018, \"month\": 8}, {\"value\": 334, \"sender\": \"ksu\", \"year\": 2018, \"month\": 9}, {\"value\": 190, \"sender\": \"ksu\", \"year\": 2018, \"month\": 10}, {\"value\": 101, \"sender\": \"ksu\", \"year\": 2018, \"month\": 11}, {\"value\": 404, \"sender\": \"ksu\", \"year\": 2018, \"month\": 12}, {\"value\": 179, \"sender\": \"ksu\", \"year\": 2019, \"month\": 1}, {\"value\": 455, \"sender\": \"ksu\", \"year\": 2019, \"month\": 2}, {\"value\": 466, \"sender\": \"ksu\", \"year\": 2019, \"month\": 3}, {\"value\": 395, \"sender\": \"ksu\", \"year\": 2019, \"month\": 4}, {\"value\": 471, \"sender\": \"ksu\", \"year\": 2019, \"month\": 5}, {\"value\": 53, \"sender\": \"ksu\", \"year\": 2019, \"month\": 6}, {\"value\": 160, \"sender\": \"ksu\", \"year\": 2019, \"month\": 7}, {\"value\": 402, \"sender\": \"ksu\", \"year\": 2019, \"month\": 8}, {\"value\": 40, \"sender\": \"ksu\", \"year\": 2019, \"month\": 9}, {\"value\": 386, \"sender\": \"ksu\", \"year\": 2019, \"month\": 10}, {\"value\": 458, \"sender\": \"ksu\", \"year\": 2019, \"month\": 11}, {\"value\": 407, \"sender\": \"ksu\", \"year\": 2019, \"month\": 12}]"
    // let raw_data = {{ raw_data}}
    let data = Object.values(JSON.parse(raw_data));

    console.log(data);

    let margin = { top: 10, right: 10, bottom: 10, left: 10 }
      , width = 960 - margin.left - margin.right
      , height = 500 - margin.top - margin.bottom
      , gutter = 30
      , pyramid_h = height - 105
      , dom_month = d3.extent( data, d => d.month )
      , dom_year = d3.extent( data, d => d.year )
      , dom_value = d3.extent( data, d => d.value )
      , formatter = d3.format( ',d' )
      , barheight = ( pyramid_h / ( dom_month[1] - dom_month[0] ) ) - 0.5
      , cx = width / 2
      ;

    let svg = d3.select( 'body' ).append( 'svg' )
        .attr( 'width', width + margin.left + margin.right )
        .attr( 'height', height + margin.top + margin.bottom )
      .append( 'g' )
        .attr( 'transform', `translate(${margin.left},${margin.top})` );

    console.log(svg)


    let svg_text_m = svg.append( 'text' )
      .attr( 'transform', `translate(${cx-350},10)` )
      .style( 'font', '15px sans-serif' )
      .attr( 'text-anchor', 'start' );

    let svg_text_f = svg.append( 'text' )
      .attr( 'transform', `translate(${cx+350},10)` )
      .style( 'font', '15px sans-serif' )
      .attr( 'text-anchor', 'end' );

    let svg_text_t = svg.append( 'text' )
      .attr( 'transform', `translate(${cx},${pyramid_h+55})` )
      .style( 'font', '15px sans-serif' )
      .attr( 'text-anchor', 'middle' );

    function uptext ( root, lines ) {
      var lines = this.selectAll( 'tspan' ).data( this.datum() );
      lines.text( d => d );
      lines.exit().remove();
      lines.enter().append( 'tspan' )
        .attr( 'x', 0 )
        .attr( 'dy', (d,i) => ( i * 1.2 ) + 'em' )
        .text( d => d );
      return this;
    }

    // year axis
    let s_year = d3.scale.linear()
        .domain( dom_year )
            .range([ 0, 400 ])
        .clamp( true );

    let ax_year = d3.svg.axis()
        .scale( s_year )
        .orient( 'bottom' )
        .ticks( 4 )
        .tickFormat( String );

    let svg_axis_year = svg.append( 'g' )
        .attr( 'class', 'axis year' )
        .attr( 'transform', `translate(${cx-200},${pyramid_h+85})` )
        .call( ax_year );

    // month axis
    let s_month = d3.scale.linear()
        .domain( dom_month.concat().reverse() )
        .range([ 0, pyramid_h ]);

    let ax_month_l = d3.svg.axis()
        .scale( s_month )
        .orient( 'left' )
        .tickFormat( d => s_month( d ) ? '' + d : '' );

    let ax_month_svg = svg.append( 'g' )
        .attr( 'class', 'axis age' )
        .attr( 'transform', `translate(${cx+gutter/2+10},0)` )
        .call( ax_month_l );

    ax_month_svg.append( 'text' )
        .attr( 'dy', '.32em' )
        .text('Month');

    ax_month_svg.selectAll( 'text' )
        .attr( 'x', -gutter/2-10 )
        .style( 'text-anchor', 'middle' );

    let ax_month_r = d3.svg.axis()
        .scale( s_month )
        .orient( 'right' )
        .tickFormat( d => '' );

    svg.append( 'g' )
        .attr( 'class', 'axis month' )
        .attr( 'transform', `translate(${cx-gutter/2-10},0)` )
        .call( ax_month_r );

    // population axen
    let s_value = d3.scale.linear()
        .domain( dom_value )
        .range([ 0, 250 ]);

    // Ser axis
    let s_ser = d3.scale.linear()
        .domain( dom_value.reverse() )
        .range([ 0, 250 ]);

    let ax_ser = d3.svg.axis()
        .scale( s_ser )
        .orient( 'bottom' )
        .ticks( 5 )
        .tickFormat( formatter );

    svg.append( 'g' )
        .attr( 'class', 'axis Ser' )
        .attr( 'transform',
               `translate(${cx-250-gutter},${pyramid_h+20})` )
        .call( ax_ser );

    // Ksu axis
    let ax_ksu = d3.svg.axis()
        .scale( s_value )
        .orient( 'bottom' )
        .ticks( 5 )
        .tickFormat( formatter );

    svg.append( 'g' )
        .attr( 'class', 'axis Ksu' )
        .attr( 'transform', `translate(${cx+gutter},${pyramid_h+20})` )
        .call( ax_ksu );

    // population bars
    let bars = svg.append( 'g' )
        .attr( 'class', 'pyramid population' );

    function update ( current_year, animate ) {

      var _data = data.filter( d => d.year === current_year )
        , isSer = d => d.sender === 'ser'
        , x_pos = d => {
            return isSer( d )
              ? cx - gutter - s_value( d.value )
              : cx + gutter;
          }
        , total = d3.sum( _data, d => d.value  )
        , m_total = d3.sum( _data, d => isSer( d ) ? d.value : 0 )
        ;

      svg_text_m.datum([ 'ser', formatter( m_total ) ])
            .call( uptext );

      svg_text_f.datum([ 'ksu', formatter( total - m_total ) ])
            .call( uptext );

      svg_text_t.datum([ `Total number of messages in
            ${current_year} was ${formatter(total)}` ])
            .call( uptext );

      let bar = bars.selectAll( '.bar' ).data( _data );



      bar.transition().duration( animate ? 450 : 0 )
          .attr( 'width', d => s_value( d.value ) )
          .attr( 'x', x_pos );

      bar.exit().remove();

      bar.enter().append( 'rect' )
          .attr( 'class', d => 'bar ' + d.sender )
          .attr( 'height', barheight )
          .attr( 'width', d => s_value( d.value ) )
          .attr( 'x', x_pos )
          .attr( 'y', d => s_month( d.month ) - barheight/2 );
    }

    // current year
    let curr_point = d3.svg.symbol()
        .type( 'triangle-down' )
        .size( 100 );

    let brush = d3.svg.brush()
        .x( s_year )
        .extent([ dom_year[ 1 ], dom_year[ 1 ] ])
        .on( 'brush', onbrush );

    let slider = svg_axis_year.append( 'g' )
        .attr( 'class', 'slider' )
        .call( brush );

    slider.selectAll( '.extent,.resize' ).remove();

    slider.select( '.background' )
        .attr( 'y', -20 )
        .attr( 'height', 40 );

    let handle = slider.append( 'path' )
        .attr( 'class', 'handle' )
        .attr( 'd', curr_point );

    function onbrush () {
      var value = brush.extent()[ 0 ]
        , animate = true;
      if ( d3.event && d3.event.sourceEvent ) {
        if ( d3.event.sourceEvent.type === 'mousemove' ) {
          animate = false;
        }
        value = d3.round( s_year.invert( d3.mouse( this )[ 0 ] ) );
        brush.extent([ value, value ]);
      }
      handle.attr( 'transform', `translate(${s_year(value)},-10)` );
      update( value, animate );
    }

    onbrush();

  }
